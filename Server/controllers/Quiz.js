import TryCatch from '../middlewares/TC.js';
import Quiz from '../models/Quiz.js';
import { User } from '../models/User.js';
import ScoreCard from '../models/ScoreCard.js';

export const addQuestionToQuiz = TryCatch(async (req, res) => {
    const { quizId, s_no, question, options, correctAnswer } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    quiz.questions.push({ s_no, question, options, correctAnswer });
    await quiz.save();

    res.json({ message: "Question added successfully", quiz });
});

export const generateQuiz = TryCatch(async (req, res) => {
    const { course, title, description, startTime, loginWindow, correctMarks, incorrectMarks } = req.body;
    const quiz = new Quiz({
        course,
        title,
        correctMarks,
        incorrectMarks,
        description,
        startTime,
        loginWindow,
        questions: []
    });

    await quiz.save();
    res.json({ message: "Quiz generated successfully", quiz });
});
export const getAllQuizes = TryCatch(async (req, res) => {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ message: "User not found" });
    const quizzes = await Quiz.find({
        course: { $in: user.subscription }
    });
    const validQuizzes = quizzes.filter(quiz => {
        const quizEndTime = new Date(quiz.startTime);
        quizEndTime.setHours(quizEndTime.getHours() + quiz.loginWindow);
        return new Date() <= quizEndTime;
    });
    res.json({ message: "Quizzes fetched successfully", validQuizzes });

});
export const markTheAnswer = TryCatch(async (req, res) => {
    const { quizId, s_no, selectedOption } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    const question = quiz.questions[s_no - 1].question;
    if (!question) return res.status(404).json({ message: "Question not found" });

    const isCorrect = quiz.questions[s_no - 1].correctAnswer === selectedOption;
    res.json({ message: "Answer marked", isCorrect });
});
export const submitQuiz = TryCatch(async (req, res) => {
    const { quizId, answers, userId } = req.body;
    const existingScoreCard = await ScoreCard.findOne({ userId, quizId });
    if (existingScoreCard) {
        return res.status(400).json({ message: "Quiz has already been submitted" });
    }
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    let score = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let skippedAnswers = 0;

    answers.forEach(answer => {
        const question = quiz.questions[answer.s_no - 1].question;
        if (question) {
            if (answer.selectedOption === null) {
                skippedAnswers++;
            } else if (quiz.questions[answer.s_no - 1].correctAnswer === answer.selectedOption) {
                score++;
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    });

    const scoreCard = new ScoreCard({
        userId,
        quizId,
        marksScored: score,
        correctAnswers,
        incorrectAnswers,
        skippedAnswers
    });

    await scoreCard.save();

    res.json({ message: "Quiz submitted successfully", score, totalQuestions: quiz.questions.length, scoreCard });
});