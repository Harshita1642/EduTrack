import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { addTaskToTimetable, deleteTaskFromTimetable, getTimetable,updateTaskInTimetable,updateTaskStatusFinally,updateTaskStatusIntially } from "../controllers/TimeTable.js";

const router = express.Router();

router.post("/user/addTask", isAuth,addTaskToTimetable);
router.post("/user/getTimeTable",  isAuth,getTimetable);
router.delete("/user/deleteTask", isAuth, deleteTaskFromTimetable);
router.put("/user/updateTask", isAuth, updateTaskInTimetable);
router.post("/user/startDoingTask", isAuth, updateTaskStatusIntially);
router.post("/user/stopDoingTask",isAuth,  updateTaskStatusFinally);


export default router;