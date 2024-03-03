import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import React, { FC, useState, useEffect } from "react";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LoginPage from "./Pages/LoginPage/LoginPage"

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   setIsLoggedIn(checkLoggedIn());
  // }, []);

  const showProfile = () => {
    if (!isLoggedIn) {
      setIsLogin(true);
      setIsHomePage(false);
      setIsProfile(false);
    } else {
      setIsProfile(true);
      setIsHomePage(false);
      setIsLogin(false);
    }
  };

  const showHome = () => {
    setIsHomePage(true);
    setIsProfile(false);
    setIsLogin(false);

  }
  const showLogin = () => {
    setIsLogin(!isLogin);
    setIsProfile(false);
    setIsHomePage(false);
  }
  return (
    <div className="App">
            <div className="navbar">
                <button onClick={showHome}>Home</button>
                <button onClick={showProfile}>Profile</button>
                <button onClick={showLogin}>Login</button>
            </div>
            {isProfile && <ProfilePage />}
            {isHomePage && <HomePage />}
            {isLogin && <LoginPage />}
        </div>
);
}

export default App;
