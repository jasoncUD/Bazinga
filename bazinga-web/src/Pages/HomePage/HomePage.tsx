import React, { FC, useState } from "react";
import "./HomePage.css"; // Make sure this is the correct path
import LearnPage from "../LearnPage/LearnPage";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLearnPage, setIsLearnPage] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  const showLearnPage = () => {
    setIsLearnPage(true);
  };

  const backgroundClass = showLogin ? 'blur-background' : '';

  return (
    <div>
      <header className="header">
        <h1 className="header-title">Bazinga</h1>
      </header>
      {!isLearnPage && <><div className={`header ${backgroundClass}`}>
      </div><div className="button-container1">
          <button onClick={showLearnPage}>Get Started</button>
        </div></>}
        {isLearnPage && <LearnPage />}
      
    </div>
  );
};

export default HomePage;