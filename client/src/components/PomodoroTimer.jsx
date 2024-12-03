import React, { useState, useEffect } from "react";
import s from "../styles/PomodoroTimer.module.css";
import pomodoroSound from "../assets/pomodorosound.mp3"; 

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); 
  const [isRunning, setIsRunning] = useState(false); 
  const [activeMode, setActiveMode] = useState("pomodoro"); 
 
  const audio = new Audio(pomodoroSound);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setIsRunning(false);
    if (mode === "pomodoro") setTime(25 * 60);
    if (mode === "shortBreak") setTime(5 * 60);
    if (mode === "longBreak") setTime(15 * 60);
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    handleModeChange(activeMode);
  };

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
      audio.play(); 
      
      const resetTime =
        activeMode === "pomodoro"
          ? 25 * 60
          : activeMode === "shortBreak"
          ? 5 * 60
          : 15 * 60;
      setTimeout(() => setTime(resetTime), 1000); 
    }
    return () => clearInterval(timer);
  }, [isRunning, time, activeMode, audio]);

  return (
    <div className={s.timerContainer}>
      <div className={s.topButtons}>
        <button
          className={`${s.modeButton} ${activeMode === "pomodoro" ? s.active : ""}`}
          onClick={() => handleModeChange("pomodoro")}
        >
          Pomodoro
        </button>
        <button
          className={`${s.modeButton} ${activeMode === "shortBreak" ? s.active : ""}`}
          onClick={() => handleModeChange("shortBreak")}
        >
          Short Break
        </button>
        <button
          className={`${s.modeButton} ${activeMode === "longBreak" ? s.active : ""}`}
          onClick={() => handleModeChange("longBreak")}
        >
          Long Break
        </button>
      </div>

      <div className={s.timerDisplay}>{formatTime(time)}</div>

      <div className={s.bottomButtons}>
        <button className={s.startButton} onClick={toggleTimer}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className={s.resetButton} onClick={resetTimer}>
          &#x21bb;
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
