import React, { useState } from "react";
import StudSideBar from "../components/StudSideBar"; 
import Calendar from "../components/Calendar";
import PomodoroTimer from "../components/PomodoroTimer";
import Schedule from "../pages/Schedule";
import Todo from "../components/Todo";
import ScoreGraphs from "../components/ScoreGraphs";
import s from '../Styles/StudDash.module.css';
import TakeABreak from "../components/TakeABreak";
import TakeABreakPage from "../pages/TakeABreakPage";
import Courses from "@/components/Courses/Courses";
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
          <div className={s.scoreGraphs}>
              <ScoreGraphs />
          </div>
          <div className={s.takeABreak}>
              <TakeABreak />
          </div>
        </div>
        )}
        {tabContent === "timer" && (
          <div className="flex-1">
          <PomodoroTimer />
        </div>
        )}{tabContent === "Schedule" && (
          <div className="flex-1">
          <Schedule />
        </div>
        )}
        {tabContent==="Courses"&&(
          <div >
            <Courses/>
          </div>
        )}
        {tabContent==="TakeABreakPage"&&(
          <div >
          <TakeABreakPage/>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudDashboard;