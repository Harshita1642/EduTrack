import React from "react";
import {toast} from 'sonner'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import {
  HomeIcon,
  ClockIcon,
  CalendarIcon,
  AcademicCapIcon,
  UserIcon,
  CloudArrowUpIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline"; 
import { Link, useNavigate } from 'react-router-dom';
import c from "../Styles/TutSideBar.module.css";
import { UserData } from "@/context/UserContext";

const TutSideBar = ({setTabContent}) => {
  const navigate=useNavigate();
  const navigateToOtherComponent = (component) => { setTabContent(component); };
  const {isAuth,setIsAuth} = UserData();
  const handleLogout = (e)=>{
    e.preventDefault();
    console.log("chla");
    toast.success("Logged out");
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/login");
  }

  return (
    <Sidebar className={c["sidebar"]}>
      <SidebarHeader className={c["sidebar-header"]}>My App</SidebarHeader>
      <SidebarContent className={c["sidebar-content"]}>
      
        <SidebarGroup className={c["sidebar-group"]}>
        <Button className={c["sidebar-button"]} variant="ghost" size="sm"  onClick={() => navigateToOtherComponent('TutDashboard')}>
          <HomeIcon />
          <span>Dashboard</span>
        </Button>
        </SidebarGroup>
        
        
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm" onClick={() => navigateToOtherComponent('timer')}>
            <ClockIcon className="w-5 h-5 mr-2" /> {/* Timer icon */}
            Timer
          </Button>
        </SidebarGroup>
        
       
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm" onClick={() => navigateToOtherComponent('schedule')}>
            <CalendarIcon className="w-5 h-5 mr-2" /> 
            Schedule
          </Button>
        </SidebarGroup>
        
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm" onClick={() => navigateToOtherComponent('Courses')}>
            <AcademicCapIcon className="w-5 h-5 mr-2" /> {/* Courses icon */}
            Courses
          </Button>
        </SidebarGroup>
        
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm" onClick={() => navigateToOtherComponent('Profile')}>
            <UserIcon className="w-5 h-5 mr-2" /> {/* Profile icon */}
            Profile
          </Button>
        </SidebarGroup>
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm" onClick={() => navigateToOtherComponent('UploadNew')}>
            <CloudArrowUpIcon className="w-5 h-5 mr-2" /> {/* Upload icon */}
            Upload New
          </Button>
        </SidebarGroup>
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm" onClick={() => navigateToOtherComponent('AddQuiz')}>
            <CloudArrowUpIcon className="w-5 h-5 mr-2" /> {/* Upload icon */}
            Add Quiz
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={c["sidebar-footer"]}>
        <Button onClick={(e)=>{handleLogout(e)}} className={c["sidebar-button"]} variant="ghost" size="sm">
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" /> {/* Logout icon */}
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default TutSideBar;