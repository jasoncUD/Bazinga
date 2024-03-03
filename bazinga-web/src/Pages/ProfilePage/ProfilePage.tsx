import React, { FC, useState } from "react";
import "./ProfilePage.css";
import Account from "./ProfileComponents/Account";
import Progress from "./ProfileComponents/Progress";
import Settings from "./ProfileComponents/Settings";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
  const [activeTab, setActiveTab] = useState("account");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const [student, setStudent] = useState({
    name: "John Doe",
    username: "johndoe",
    password: "password",
    email: "johnDoe@gmail.com",
    grade: "10",
    completedCourses: ["Math", "Science", "English"],
    incompleteCourses: ["History", "Art"],
  });
  const { name, username, password, email, grade, completedCourses } = student;

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="sidebar-header">
        </div>
        <ul className="menu-list">
          <li onClick={() => handleTabChange("account")} className="menu-item">
            Account
          </li>
          <li onClick={() => handleTabChange("progress")} className="menu-item">
            Progress
          </li>
          <li onClick={() => handleTabChange("settings")} className="menu-item">
            Settings
          </li>
        </ul>
      </div>
      <div className="main-content">
        {activeTab === "account" && <Account student={student} />}
        {activeTab === "progress" && <Progress student={student}/>}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default ProfilePage;
