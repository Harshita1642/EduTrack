import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const scoreCardSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    marksScored: {
        type: Number,
        required: true
    },
    correctAnswers: {
        type: Number,
        required: true
    },
    incorrectAnswers: {
        type: Number,
        required: true
    },
    skippedAnswers: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('ScoreCard', scoreCardSchema);