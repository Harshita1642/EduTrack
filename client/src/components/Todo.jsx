import React, { useState } from "react";
import styles from "../Styles/Todo.module.css";

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Designing",
      description: "Create a wireframe and design the homepage",
      startTime: "9:00 AM",
      endTime: "12:00 PM",
      state: "pending",
    },
    {
      id: 2,
      title: "Developing pages",
      description: "Build the authentication API for the app",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      state: "started",
    },
    {
      id: 3,
      title: "Documentation",
      description: "Prepare the project documentation",
      startTime: "4:00 PM",
      endTime: "5:00 PM",
      state: "pending",
    },
    {
      id: 4,
      title: "Documentation",
      description: "Prepare the project documentation",
      startTime: "4:00 PM",
      endTime: "5:00 PM",
      state: "pending",
    }
  ]);

  const handleStateChange = (id, newState) => {
    if (newState === "complete") {
      const completedTask = tasks.find((task) => task.id === id);
      alert(`Task Completed: ${completedTask.title}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } else {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, state: newState } : task
        )
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1 style={{padding:'10px'}}>My Tasks</h1>
      <hr style={{ height: '1px', backgroundColor: 'white', border: 'none',margin:'10px', borderRadius:'10px' }} />
      {tasks.length === 0 ? (
        <p>No tasks to display. Enjoy your free time!</p>
      ) : (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <div key={task.id} className={styles.taskItem}>
              <h3>{task.title}</h3>
              <select
                value={task.state}
                onChange={(e) => handleStateChange(task.id, e.target.value)}
                className={styles.selectDropdown}
              >
                <option value="pending">Pending</option>
                <option value="started">Started</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
