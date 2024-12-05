import React from "react";
import StudSideBar from "../components/StudSideBar"; // Adjust path as needed
import Calendar from "../components/Calendar"

const StudDashboard = () => {
  return (
    <div className="flex">
      <StudSideBar />
      <div style={{  position: 'absolute', right: 10, top: 5,  }}>
        <Calendar />
      </div>
    </div>
  );
};

export default StudDashboard;