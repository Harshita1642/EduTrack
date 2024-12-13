import React, { useState } from "react";
import { UserData } from "../context/UserContext"
import TutSideBar from "../components/TutSideBar"; 
import Calendar from "../components/Calendar";
import PomodoroTimer from "../components/PomodoroTimer";
import Schedule from "../pages/Schedule";
import Todo from "../components/Todo";
import Stats from "../components/Stats"
import Profile from "../pages/Profile";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Dictionary from "../components/Dictionary"
import c from '../Styles/TutDash.module.css'
import Courses from "@/components/Courses/Courses";
import AdminCourses from "@/components/Admin/AdminCourses";
import AddQuiz from "./AddQuiz";
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
            <div className={c.AdminDashboard}>
              <AdminDashboard/>
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
        {tabContent==="Courses"&&(
          <div >
            <Courses/>
          </div>
        )}
        {tabContent==="Profile"&&(
          <div >
            <Profile />
          </div>
        )}
        {tabContent==="UploadNew"&&(
          <div >
            <AdminCourses/>
          </div>
        )}
        {tabContent==="AddQuiz"&&(
          <div >
            <AddQuiz/>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutDashboard;
