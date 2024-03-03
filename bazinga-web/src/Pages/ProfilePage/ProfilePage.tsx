import React, { FC, useState, useEffect } from "react";
import "./ProfilePage.css";
import Account from "./ProfileComponents/Account";
import Progress from "./ProfileComponents/Progress";
import Settings from "./ProfileComponents/Settings";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [student, setStudent] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    age: 0,
    gradeLevel: "",
    completedCourses: [""],
    incompleteCourses: [""],
  });

  useEffect(() => {
    // Fetch the student data from localStorage when the component mounts
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setStudent(userData);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="sidebar-header"></div>
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
        {activeTab === "progress" && <Progress student={student} />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default ProfilePage;
