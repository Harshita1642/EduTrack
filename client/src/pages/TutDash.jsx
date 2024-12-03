import React from "react";
import TutSideBar from "../components/TutSideBar"; // Adjust path as needed
import Calendar from "../components/Calendar"
const TutDashboard = () => {
  return (
    <div className="flex">
      <TutSideBar />
      <div style={{  position: 'absolute', right: 10, top: 5,  }}>
        <Calendar />
      </div>

    </div>
  );
};

export default TutDashboard;

