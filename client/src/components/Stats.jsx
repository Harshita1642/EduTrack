import React from "react";
import c from "../Styles/Stats.module.css";

const Stats = () => {
  return (
    <div className={c.container}>
      <div className={c.innerDiv}>
        <h1>Total Courses</h1>
      </div>
      <div className={c.innerDiv}>
      <h1>Total Lectures</h1>
      </div>
      <div className={c.innerDiv}>
        <h1>Total users</h1>
      </div>
    </div>
  );
};

export default Stats;
