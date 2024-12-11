import React, { useState } from "react";
import TutSideBar from "../components/TutSideBar"; 
import Calendar from "../components/Calendar";
import PomodoroTimer from "../components/PomodoroTimer";
import Schedule from "../pages/Schedule";
import Todo from "../components/Todo";
import Stats from "../components/Stats"
import Dictionary from "../components/Dictionary"
import c from '../Styles/TutDash.module.css'
const TutDashboard = () => {
  const [tabContent, setTabContent] = useState('TutDashboard');
  
  return (
    <div className="flex">
      <TutSideBar setTabContent={setTabContent}/>
      <div >
        {tabContent === "TutDashboard" && (
          <div className={c.container}>
            <div className={c.calendar}>
              <Calendar />
            </div>
            <div className={c.todo}>
            <Todo/>
            </div>
            <div className={c.stats}>
              {/* <Stats/> */}
            </div>
            <div>
              <Dictionary/>
            </div>
            <div style={{position:'absolute',top:'100px',left:'200px'}}>
              <h1>Hi</h1>
            </div>

          </div>
        )}
        {tabContent === "timer" && (
          <div className="flex-1">
          <PomodoroTimer />
        </div>
        )}
        {tabContent==="schedule"&&(
          <div >
            <Schedule/>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutDashboard;
