import React from "react";
import StudSideBar from "../components/StudSideBar"; // Adjust path as needed

const StudDashboard = () => {
  return (
    <div className="flex">
      <StudSideBar />
      <div className="flex-1 p-4">
        <h1>Welcome to Student Dashboard</h1>
      </div>
    </div>
  );
};

export default StudDashboard;