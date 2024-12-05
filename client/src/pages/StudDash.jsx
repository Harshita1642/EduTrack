import React, { useState } from "react";
import StudSideBar from "../components/StudSideBar"; 
import Calendar from "../components/Calendar";
import PomodoroTimer from "../components/PomodoroTimer";
import Schedule from "../pages/Schedule";
import Todo from "../components/Todo";

const StudDashboard = () => {
  const [tabContent, setTabContent] = useState('StudDashboard');
  
  return (
    <div className="flex">
      <StudSideBar setTabContent={setTabContent}/>
      <div >
        {tabContent === "StudDashboard" && (
          <div >
            <div >
              <Calendar />
            </div>
            <div >
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

