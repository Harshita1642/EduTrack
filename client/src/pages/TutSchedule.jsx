import TutSideBar from "@/components/TutSideBar";
import React, { useState } from "react";
import styles from "../Styles/TutSchedule.module.css"; 

const TutSchedule = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !description || !startTime || !endTime) {
      alert("All fields are required!");
      return;
    }

    const newTask = {
      taskName,
      description,
      startTime,
      endTime,
      status: "Pending",
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setDescription("");
    setStartTime("");
    setEndTime("");
  };

  const handleTaskStatusChange = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index
        ? { ...task, status: task.status === "Pending" ? "Done" : "Pending" }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      {/* Sidebar Section */}
      <div className={styles.sidebar}>
        <TutSideBar />
      </div>

      {/* Main Content Section */}
      <div className={styles.mainContent}>
        {/* Task Form */}
        <form onSubmit={handleSubmit} className={styles.taskForm}>
  {/* Task Name */}
  <div>
    <label htmlFor="taskName">Task Name:</label>
    <input
      type="text"
      id="taskName"
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
      placeholder="Enter task name"
    />
  </div>

  {/* Description */}
  <div>
    <label htmlFor="description">Description:</label>
    <textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Enter task description"
    ></textarea>
  </div>

  {/* Start Time */}
  <div>
    <label htmlFor="startTime">Start Time:</label>
    <input
      type="time"
      id="startTime"
      value={startTime}
      onChange={(e) => setStartTime(e.target.value)}
    />
  </div>

  {/* End Time */}
  <div>
    <label htmlFor="endTime">End Time:</label>
    <input
      type="time"
      id="endTime"
      value={endTime}
      onChange={(e) => setEndTime(e.target.value)}
    />
  </div>
  <button type="submit" className={styles.Schedulebutton}>Add Task</button>

</form>

        {/* Task List */}
        <div className={styles.taskList}>
          <h3>Task List</h3>
          {tasks.map((task, index) => (
  <div key={index} className={styles.taskItem}>
    <div className={styles.taskDetails}>
      <h4 className={styles.taskName}>{task.taskName}</h4>
      <p className={styles.taskDescription}>{task.description}</p>
    </div>
    
    <div className={styles.timeContainer}>
      <p>Start: {task.startTime}</p>
      <p>End: {task.endTime}</p>
    </div>
    
    <div className={styles.statusContainer}>
      <label>
        <input
          type="checkbox"
          checked={task.status === "Done"}
          onChange={() => handleTaskStatusChange(index)}
        />
        <span className={`${styles.statusLabel} ${
          task.status === "Done" ? styles.statusDone : styles.statusPending
        }`}>
          {task.status}
        </span>
      </label>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default TutSchedule;