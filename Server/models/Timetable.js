import mongoose, { Schema } from 'mongoose';
//create a dateTime interface which contains the  fields date and time in which date is of type 30-11-2024 and time and 9:00 am

const dateTimeSchema = new Schema({
    date: {
        type: String,
        match: /^\d{2}-\d{2}-\d{4}$/,
        required: true
    },
    time: {
        type: String,
        match: /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/,
        required: true
    }
}, { _id: false });
const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    startTime: {
        type: dateTimeSchema,
        required: true,
    },
    endTime: {
        type: dateTimeSchema,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    }
}, { _id: false });

const timetableSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: String,
        required: true,
    },
    tasks: [taskSchema]
}, { timestamps: true });

export const Timetable = mongoose.model("Timetable", timetableSchema);

taskSchema.pre('save', function (next) {
    if (this.endTime <= this.startTime) {
        return next(new Error('End time must be after start time.'));
    }
    next();
});
