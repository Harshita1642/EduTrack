// QuizList.js
import React, { useState } from 'react';
import TakeQuiz from '../components/TakeQuiz';
import s from '../Styles/QuizPage.module.css'; // Add styles for the list

const QuizPage = () => {
    const [selectedQuizId, setSelectedQuizId] = useState(null);

    // Dummy list of quizzes
    const quizzes = [
        { id: 1, title: "ReactJS Basics", description: "Test your React knowledge!" },
        { id: 2, title: "JavaScript Fundamentals", description: "Assess your JavaScript skills." },
        { id: 3, title: "CSS Essentials", description: "Check your understanding of CSS." },
    ];

    const handleQuizClick = (quizId) => {
        setSelectedQuizId(quizId);
    };

    return (
        <div className={s.quizListContainer}>
            {selectedQuizId ? (
                <TakeQuiz quizId={selectedQuizId} /> // Render TakeQuiz component
            ) : (
                <div>
                    <h1>Available Quizzes</h1>
                    <ul className={s.quizList}>
                        {quizzes.map((quiz) => (
                            <li
                                key={quiz.id}
                                className={s.quizItem}
                                onClick={() => handleQuizClick(quiz.id)}
                            >
                                <h3>{quiz.title}</h3>
                                <p>{quiz.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default QuizPage;

