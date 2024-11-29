import React from "react";
import TutSideBar from "../components/TutSideBar"; // Adjust path as needed

const TutDashboard = () => {
  return (
    <div className="flex">
      <TutSideBar />
      <div className="flex-1 p-4">
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

export default TutDashboard;