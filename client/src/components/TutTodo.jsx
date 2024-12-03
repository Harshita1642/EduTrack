import React from "react";

const TutTodo = ({ tasks, onComplete }) => {
  return (
    <div>
      <h3>Pending Tasks</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onComplete(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutTodo;