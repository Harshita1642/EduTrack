import express from "express";
import { isTeacher, isAuth } from "../middlewares/isAuth.js";
import {
  addLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllStats,
  getAllUser,
  updateRole,
} from "../controllers/admin.js";
import { uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

router.post("/course/new", isAuth, isTeacher, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isTeacher, uploadFiles, addLectures);
router.delete("/course/:id", isAuth, isTeacher, deleteCourse);
router.delete("/lecture/:id", isAuth, isTeacher, deleteLecture);
router.get("/stats", isAuth, isTeacher, getAllStats);
router.put("/user/:id", isAuth, updateRole);
router.get("/users", isAuth, isTeacher, getAllUser);

export default router;