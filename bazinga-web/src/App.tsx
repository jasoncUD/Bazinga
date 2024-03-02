import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import React, { FC, useState } from "react";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const showProfile = () => {
    setIsProfile(!isProfile);
    setIsHomePage(false);
  };
  return (
    <div className="App">
      <button>Login</button>
      <button onClick={showProfile}>Profile</button>
      {isProfile && <ProfilePage />}
      {/* {isHomePage && <HomePage />} */}
    </div>
  );
}

export default App;
