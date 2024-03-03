import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import React, { FC, useState, useEffect } from "react";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LoginPage from "./Pages/LoginPage/LoginPage"

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const checkLoggedIn = () => localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(checkLoggedIn());

  useEffect(() => {
    // Update isLoggedIn state based on localStorage when App mounts
    setIsLoggedIn(checkLoggedIn());
  }, []);

  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
    showProfile();
    if (status) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  };

  const showProfile = () => {
      setIsProfile(true);
      setIsHomePage(false);
      setIsLogin(false);
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

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove the flag from local storage
    setIsLoggedIn(false); // Update application state
    setIsLogin(false); // Ensure the login page is not shown
    setIsHomePage(true); // Optionally redirect the user to the HomePage
  };

  return (
    <div className="App">
       <div className="navbar">
      <button onClick={showHome}>Home</button>
      <button onClick={showProfile}>Profile</button>
      <button onClick={isLoggedIn ? handleLogout : showLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
      {isProfile && <ProfilePage />}
      {isHomePage && <HomePage />}
      {isLogin && <LoginPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
