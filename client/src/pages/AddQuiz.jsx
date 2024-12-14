import React, { useState } from "react";
import c from "../Styles/AddQuiz.module.css"; // Adjust the path if necessary

const AddQuiz = () => {
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    course: "",
    questions: [],
    correctMarks: "",
    incorrectMarks: "",
    startTime: "",
    loginWindow: "",
  });

  const [question, setQuestion] = useState({
    s_no: "",
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...question.options];
    updatedOptions[index] = value;
    setQuestion({ ...question, options: updatedOptions });
  };

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, { ...question, s_no: quiz.questions.length + 1 }],
    });
    setQuestion({ s_no: "", question: "", options: ["", "", "", ""], correctAnswer: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Data:", quiz);
    // Submit the quiz data to the server here
  };

  return (
    <div className={c.container}>
      <h1 className={c.heading}>Add Quiz</h1>
      <form className={c.form} onSubmit={handleSubmit}>
        <div>
          <label className={c.label}>Title:</label>
          <input
            className={c.input}
            type="text"
            name="title"
            value={quiz.title}
            onChange={handleQuizChange}
            required
          />
        </div>
        <div>
          <label className={c.label}>Description:</label>
          <textarea
            className={c.input}
            name="description"
            value={quiz.description}
            onChange={handleQuizChange}
            required
          />
        </div>
        <div>
          <label className={c.label}>Course name:</label>
          <input
            className={c.input}
            type="text"
            name="course"
            value={quiz.course}
            onChange={handleQuizChange}
            required
          />
        </div>
        <div>
          <label className={c.label}>Correct Marks:</label>
          <input
            className={c.input}
            type="number"
            name="correctMarks"
            value={quiz.correctMarks}
            onChange={handleQuizChange}
            required
          />
        </div>
        <div>
          <label className={c.label}>Incorrect Marks:</label>
          <input
            className={c.input}
            type="number"
            name="incorrectMarks"
            value={quiz.incorrectMarks}
            onChange={handleQuizChange}
            required
          />
        </div>
        <div>
          <label className={c.label}>Start Time:</label>
          <input
            className={c.input}
            type="datetime-local"
            name="startTime"
            value={quiz.startTime}
            onChange={handleQuizChange}
            required
          />
        </div>
        <div>
          <label className={c.label}>Login Window (in minutes):</label>
          <input
            className={c.input}
            type="number"
            name="loginWindow"
            value={quiz.loginWindow}
            onChange={handleQuizChange}
            required
          />
        </div>

        <h2 className={c.heading}>Add Questions</h2>
        <div>
          <label className={c.label}>Question:</label>
          <textarea
            className={c.input}
            name="question"
            value={question.question}
            onChange={handleQuestionChange}
            required
          />
        </div>
        {question.options.map((option, index) => (
          <div key={index}>
            <label className={c.label}>Option {index + 1}:</label>
            <input
              className={c.input}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <div>
          <label className={c.label}>Correct Answer (Option Number):</label>
          <input
            className={c.input}
            type="number"
            name="correctAnswer"
            value={question.correctAnswer}
            onChange={handleQuestionChange}
            required
          />
        </div>
        <button className={c.button} type="button" onClick={addQuestion}>
          Add Question
        </button>

        <h3 className={c.heading}>Questions Preview</h3>
        <ul className={c.preview}>
          {quiz.questions.map((q) => (
            <li key={q.s_no} className={c.previewItem}>
              {q.s_no}. {q.question}
            </li>
          ))}
        </ul>

        <button className={c.button} type="submit">
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default AddQuiz;
