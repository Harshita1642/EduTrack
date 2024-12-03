import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuesSchema = new Schema({
    s_no: { type: Number, required: true },
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: Number, required: true }
});
const quizSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    questions: { type: [QuesSchema], required: true },
    correctMarks: { type: Number, required: true },
    incorrectMarks: { type: Number, required: true },
    startTime: { type: Date, required: true },
    loginWindow: { type: Number, required: true },
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;