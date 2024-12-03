import React from "react";
import StudSideBar from "../components/StudSideBar"; // Adjust path as needed
import PomodoroTimer from "../components/PomodoroTimer";

const Pomodoro = () => {
  
  const backgroundColor = "#d8c0f7"; 

  return (
    <div
      className="flex w-full h-screen"
      style={{ backgroundColor }} 
    >
      <StudSideBar />
      <div className="flex-1">
        <PomodoroTimer />
      </div>
    </div>
  );
};

export default Pomodoro;
