import React from "react";
import { UserData } from "@/context/UserContext";
import styles from "../Styles/StatusBar.module.css";

const StatusBar = () => {
  const { user } = UserData();

  return (
    <div className={styles.statusBar}>
      <div className={styles.greeting}>
        Good to have you back{" "}
        <span className={styles.username}>{user.name}</span>
        <span>
          <img
            src="/statusbar.jpg"
            alt="User Profile"
            className={styles.profileImage}
          />
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
