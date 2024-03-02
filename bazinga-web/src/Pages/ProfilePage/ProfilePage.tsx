import React, { FC, useState } from "react";
import "./ProfilePage.css";
import Account from "./ProfileComponents/Account";
import Progress from "./ProfileComponents/Progress";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
  const [activeTab, setActiveTab] = useState("progress");
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
          <h2>Menu</h2>
        </div>
        <ul className="menu-list">
          <li onClick={() => handleTabChange("account")} className="menu-item">
            Account
          </li>
          <li onClick={() => handleTabChange("progress")} className="menu-item">
            Progress
          </li>
        </ul>
      </div>
      <div className="main-content">
        {activeTab === "account" && <Account student={student} />}
        {activeTab === "progress" && <Progress student={student}/>}
      </div>
    </div>
  );
};

export default ProfilePage;
