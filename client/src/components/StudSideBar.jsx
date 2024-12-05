import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
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



const StudSideBar = () => {
  return (
    <Sidebar className={s["sidebar"]}>
      <SidebarHeader className={s["sidebar-header"]}>My App</SidebarHeader>
      <SidebarContent className={s["sidebar-content"]}>
        <Link to="/StudDash">
        <SidebarGroup className={s["sidebar-group"]}>
        <Button className={s["sidebar-button"]} variant="ghost" size="sm">
          <HomeIcon />
          <span>Dashboard</span>
        </Button>
        </SidebarGroup>
        </Link>
        <Link to="/timer">
        <SidebarGroup className={s["sidebar-group"]}>
          <Button className={s["sidebar-button"]} variant="ghost" size="sm">
            <ClockIcon className="w-5 h-5 mr-2" /> 
            Timer
          </Button>
        </SidebarGroup>
        </Link>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button className={s["sidebar-button"]} variant="ghost" size="sm">
            <CalendarIcon className="w-5 h-5 mr-2" /> 
            Schedule
          </Button>
        </SidebarGroup>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button className={s["sidebar-button"]} variant="ghost" size="sm">
            <AcademicCapIcon className="w-5 h-5 mr-2" /> {/* Courses icon */}
            Courses
          </Button>
        </SidebarGroup>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button className={s["sidebar-button"]} variant="ghost" size="sm">
            <UserIcon className="w-5 h-5 mr-2" /> {/* Profile icon */}
            My Profile
          </Button>
        </SidebarGroup>
        <SidebarGroup className={s["sidebar-group"]}>
          <Button className={s["sidebar-button"]} variant="ghost" size="sm">
            <BookOpenIcon className="w-5 h-5 mr-2" /> {/* Upload icon */}
            My Classes
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={s["sidebar-footer"]}>
        <Button className={s["sidebar-button"]} variant="ghost" size="sm">
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" /> {/* Logout icon */}
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default StudSideBar;