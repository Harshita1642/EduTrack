import { Timetable } from "../models/Timetable.js";
import TryCatch from "../middlewares/TC.js";

const validateFields = (fields, req, res) => {
    for (const field of fields) {
        if (!req.body[field]) {
            res.status(400).json({ message: `${field} is required` });
            return false;
        }
    }
    return true;
};

export const addTaskToTimetable = TryCatch(async (req, res) => {
    const requiredFields = ['userId', 'name', 'description', 'startTime', 'endTime'];
    if (!validateFields(requiredFields, req, res)) return;

    const { userId, name, description, startTime, endTime } = req.body;
    const currdate = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');
    const date = currdate.split('T')[0];
    const task = { name, description, startTime, endTime };

    let timeTable = await Timetable.findOne({ userId, date });
    if (!timeTable) {
        timeTable = new Timetable({ userId, date, tasks: [task] });
    } else {
        const sameNameTask = timeTable.tasks.find(t => t.name === name) !== undefined;
        if (sameNameTask) {
            return res.status(400).json({ message: "Task with same name already added" });
        } else {
            const isTaskExists = timeTable.tasks.find(t =>
                t.name === name &&
                t.description === description &&
                t.startTime.date === startTime.date &&
                t.startTime.time === startTime.time &&
                t.endTime.date === endTime.date &&
                t.endTime.time === endTime.time
            ) !== undefined;
            if (isTaskExists) {
                return res.status(400).json({ message: "Task already added" });
            }
            timeTable.tasks.push(task);
        }
    }
    await timeTable.save();
    res.json({ message: "Task added successfully", timeTable });
});

export const getTimetable = TryCatch(async (req, res) => {
    const requiredFields = ['userId', 'date'];
    if (!validateFields(requiredFields, req, res)) return;

    const { userId, date } = req.body;
    const timeTable = await Timetable.find({ userId, date });
    res.json({ message: "Tasks fetched successfully", timeTable });
});

export const deleteTaskFromTimetable = TryCatch(async (req, res) => {
    const requiredFields = ['userId', 'date', 'name'];
    if (!validateFields(requiredFields, req, res)) return;

    const { userId, date, name } = req.body;
    const timeTable = await Timetable.findOne({ userId, date });
    if (timeTable) {
        timeTable.tasks = timeTable.tasks.filter(task => task.name !== name);
        await timeTable.save();
    }
    res.json({ message: "Task deleted successfully", timeTable });
});

export const updateTaskInTimetable = TryCatch(async (req, res) => {
    const requiredFields = ['userId', 'date', 'idx', 'name', 'description', 'startTime', 'endTime'];
    if (!validateFields(requiredFields, req, res)) return;

    const { userId, date, idx, name, description, startTime, endTime } = req.body;
    const timeTable = await Timetable.findOne({ userId, date });
    if (timeTable) {
        const task = timeTable.tasks[idx];
        if (task) {
            task.name = name;
            task.description = description;
            task.startTime = startTime;
            task.endTime = endTime;
            await timeTable.save();
        }
    }
    res.json({ message: "Task updated successfully", timeTable });
});

export const updateTaskStatusIntially = TryCatch(async (req, res) => {
    const requiredFields = ['userId', 'date', 'name'];
    if (!validateFields(requiredFields, req, res)) return;

    const { userId, date, name } = req.body;
    const timeTable = await Timetable.findOne({ userId, date });
    if (timeTable) {
        const task = timeTable.tasks.find(task => task.name === name);
        if (task) {
            if (task.status === 'pending') {
                task.status = 'in-progress';
            }
            await timeTable.save();
        } else {
            return res.status(400).json({ message: "Task not found" });
        }
    }
    return res.json({ message: "Task status updated successfully", timeTable });
});

export const updateTaskStatusFinally = TryCatch(async (req, res) => {
    const requiredFields = ['userId', 'date', 'name'];
    if (!validateFields(requiredFields, req, res)) return;

    const { userId, date, name } = req.body;
    const timeTable = await Timetable.findOne({ userId, date });
    if (timeTable) {
        const task = timeTable.tasks.find(task => task.name === name);
        if (task) {
            if (task.status === 'in-progress') {
                task.status = 'completed';
            }
            await timeTable.save();
        } else {
            return res.status(400).json({ message: "Task not found" });
        }
    }
    return res.json({ message: "Task status updated successfully", timeTable });
});
