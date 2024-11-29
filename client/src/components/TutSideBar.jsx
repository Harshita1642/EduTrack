import React from "react";
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
} from "@heroicons/react/24/outline"; // Using outline style
import c from "../Styles/TutSideBar.module.css";

const TutSideBar = () => {
  return (
    <Sidebar className={c["sidebar"]}>
      <SidebarHeader className={c["sidebar-header"]}>My App</SidebarHeader>
      <SidebarContent className={c["sidebar-content"]}>
        <SidebarGroup className={c["sidebar-group"]}>
        <Button className={c["sidebar-button"]} variant="ghost" size="sm">
          <HomeIcon />
          <span>Dashboard</span>
        </Button>
        </SidebarGroup>
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm">
            <ClockIcon className="w-5 h-5 mr-2" /> {/* Timer icon */}
            Timer
          </Button>
        </SidebarGroup>
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm">
            <CalendarIcon className="w-5 h-5 mr-2" /> {/* Schedule icon */}
            Schedule
          </Button>
        </SidebarGroup>
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm">
            <AcademicCapIcon className="w-5 h-5 mr-2" /> {/* Courses icon */}
            Courses
          </Button>
        </SidebarGroup>
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm">
            <UserIcon className="w-5 h-5 mr-2" /> {/* Profile icon */}
            My Profile
          </Button>
        </SidebarGroup>
        <SidebarGroup className={c["sidebar-group"]}>
          <Button className={c["sidebar-button"]} variant="ghost" size="sm">
            <CloudArrowUpIcon className="w-5 h-5 mr-2" /> {/* Upload icon */}
            Upload New
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={c["sidebar-footer"]}>
        <Button className={c["sidebar-button"]} variant="ghost" size="sm">
          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" /> {/* Logout icon */}
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default TutSideBar;