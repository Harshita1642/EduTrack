import React, { useState } from "react";
import StudSideBar from "../components/StudSideBar"; 
import Calendar from "../components/Calendar";
import PomodoroTimer from "../components/PomodoroTimer";
import Schedule from "../pages/Schedule";
import Todo from "../components/Todo";
import s from '../Styles/StudDash.module.css'

const StudDashboard = () => {
  const [tabContent, setTabContent] = useState('StudDashboard');
  
  return (
    <div className="flex">
      <StudSideBar setTabContent={setTabContent}/>
      <div >
        {tabContent === "StudDashboard" && (
          <div className={s.container}>
          <div className={s.calendar}>
            <Calendar />
          </div>
          <div className={s.todo}>
            <Todo/>
          </div>
        </div>
        )}
        {tabContent === "timer" && (
          <div className="flex-1">
          <PomodoroTimer />
        </div>
        )}
        {tabContent==="Schedule"&&(
          <div >
            <Schedule/>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudDashboard;

