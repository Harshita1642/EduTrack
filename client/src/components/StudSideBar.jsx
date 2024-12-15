import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  ClockIcon,
  CalendarIcon,
  AcademicCapIcon,
  UserIcon,
  BookOpenIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline"; // Using outline style
import s from "../Styles/StudSideBar.module.css";
import { toast } from "sonner";

const StudSideBar = ({ setTabContent }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/StudSchedule");
  };
  const navigateToOtherComponent = (component) => {
    setTabContent(component);
  };

  const handleLogout = (e)=>{
    e.preventDefault();
    toast.success("Logged out");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <Sidebar className={s["sidebar"]}>
      <SidebarHeader className={s["sidebar-header"]}>My App</SidebarHeader>
      <SidebarContent className={s["sidebar-content"]}>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button
            className={s["sidebar-button"]}
            variant="ghost"
            size="sm"
            onClick={() => navigateToOtherComponent("StudDashboard")}
          >
            <HomeIcon />
            <span>Dashboard</span>
          </Button>
        </SidebarGroup>

        <SidebarGroup className={s["sidebar-group"]}>
          <Button
            className={s["sidebar-button"]}
            variant="ghost"
            size="sm"
            onClick={() => navigateToOtherComponent("timer")}
          >
            <ClockIcon className="w-5 h-5 mr-2" />
            Timer
          </Button>
        </SidebarGroup>

        <SidebarGroup className={s["sidebar-group"]}>
          <Button
            className={s["sidebar-button"]}
            variant="ghost"
            size="sm"
            onClick={() => navigateToOtherComponent("Schedule")}
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            Schedule
          </Button>
        </SidebarGroup>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button
            className={s["sidebar-button"]}
            variant="ghost"
            size="sm"
            onClick={() => navigateToOtherComponent("Courses")}
          >
            <AcademicCapIcon className="w-5 h-5 mr-2" /> {/* Courses icon */}
            Courses
          </Button>
        </SidebarGroup>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button className={s["sidebar-button"]} variant="ghost" size="sm" onClick={() => navigateToOtherComponent('Profile')}>
            <UserIcon className="w-5 h-5 mr-2" /> {/* Profile icon */}
            My Profile
          </Button>
        </SidebarGroup>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button
            className={s["sidebar-button"]}
            variant="ghost"
            size="sm"
            onClick={() => navigateToOtherComponent("TakeABreakPage")}
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            Take A Break
          </Button>
        </SidebarGroup>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button
            className={s["sidebar-button"]}
            variant="ghost"
            size="sm"
            onClick={() => navigateToOtherComponent("QuizPage")}
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            Take Quiz
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={s["sidebar-footer"]}>
        <Button
        onClick = {(e)=>{handleLogout(e)}} 
        className={s["sidebar-button"]} variant="ghost" size="sm">
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />{" "}
          {/* Logout icon */}
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default StudSideBar;
