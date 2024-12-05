import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { generateQuiz, addQuestionToQuiz, getAllQuizes, markTheAnswer, submitQuiz } from "../controllers/Quiz.js";
const router = express.Router();

// router.use(isAuth);

router.post("/quiz/generate", generateQuiz);
router.post("/quiz/addSingleQues", addQuestionToQuiz);
router.post("/quiz/getAll", getAllQuizes);
router.post("/quiz/markAnswer", markTheAnswer);
router.post("/quiz/submit", submitQuiz);

export default router;

