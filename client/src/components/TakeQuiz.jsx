import React, { useEffect, useState } from 'react';
import s from '../Styles/TakeQuiz.module.css'; // Import the CSS Module

const TakeQuiz = ({ quizId }) => {
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState({}); // State to track selected answers
    const [submitted, setSubmitted] = useState(false); // State to track submission

    // Simulate fetching data with dummy data
    useEffect(() => {
        // Dummy quiz data
        const dummyQuiz = {
            title: "ReactJS Basics",
            description: "A quiz to test your basic knowledge of ReactJS.",
            startTime: new Date().toISOString(),
            correctMarks: 4,
            incorrectMarks: -1,
            questions: [
                {
                    s_no: 1,
                    question: "What is JSX in React?",
                    options: ["A JavaScript file", "A style sheet", "JavaScript XML", "None of the above"],
                    correctAnswer: 2
                },
                {
                    s_no: 2,
                    question: "What does the `useState` hook do?",
                    options: ["Manages state in a component", "Fetches data from an API", "Sets up routing", "None of the above"],
                    correctAnswer: 0
                },
                {
                    s_no: 3,
                    question: "Which of the following is used to create a new React app?",
                    options: ["create-react-app", "npm start", "react-create", "create-react-project"],
                    correctAnswer: 0
                }
            ]
        };

        // Simulating API call delay
        setTimeout(() => {
            setQuiz(dummyQuiz);
            setLoading(false);
        }, 1000);
    }, [quizId]);

    const handleOptionChange = (questionIndex, optionIndex) => {
        setAnswers({
            ...answers,
            [questionIndex]: optionIndex
        });
    };

    const handleSubmit = () => {
        setSubmitted(true);
        alert("Your answers have been submitted.");
    };

    if (loading) {
        return <div className={s.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={s.error}>{error}</div>;
    }

    return (
        <div className={s.quizContainer}>
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>

            <div className={s.quizTimer}>
                <strong>Start Time: </strong>{new Date(quiz.startTime).toLocaleString()}
            </div>

            <div className={s.questions}>
                {quiz.questions.map((question, index) => (
                    <div key={index} className={s.questionItem}>
                        <p><strong>{index + 1}. {question.question}</strong></p>
                        <ul>
                            {question.options.map((option, i) => (
                                <li
                                    key={i}
                                    className={
                                        submitted && answers[index] !== undefined
                                            ? i === question.correctAnswer
                                                ? s.correct
                                                : answers[index] === i
                                                    ? s.incorrect
                                                    : ''
                                            : ''
                                    }
                                >
                                    <label
                                        onClick={() => handleOptionChange(index, i)}
                                        className={s.optionLabel}
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={i}
                                            checked={answers[index] === i}
                                            onChange={() => handleOptionChange(index, i)}
                                            disabled={submitted} // Disable inputs after submission
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className={s.quizMarks}>
                <p><strong>Correct Marks: </strong>{quiz.correctMarks}</p>
                <p><strong>Incorrect Marks: </strong>{quiz.incorrectMarks}</p>
            </div>

            {!submitted && <button className={s.submitButton} onClick={handleSubmit}>Submit</button>}
        </div>
    );
};

export default TakeQuiz;
