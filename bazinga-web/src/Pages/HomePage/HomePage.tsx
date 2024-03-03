import React, { FC, useState } from "react";
import "./HomePage.css";
import LearnPage from "../LearnPage/LearnPage";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isBazinga, setIsBazinga] = useState(true);
  const [isLearnPage, setIsLearnPage] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  const showLearnPage = () => {
    setIsLearnPage(true);
  };

  const backgroundClass = showLogin ? "blur-background" : "";

  return (
    <div className="homebody">
      {isBazinga && (
        <header className="header1">
          <h1 className="header-title1">Bazinga!</h1>
        </header>
      )}
      {!isLearnPage && (
        <>
          <div className={`header ${backgroundClass}`}></div>
          <div className="button-container1">
            <button className="button1" onClick={showLearnPage}>
              Get Started
            </button>
          </div>
        </>
      )}
      {isLearnPage && <LearnPage setIsBazinga={setIsBazinga}/>}
    </div>
  );
};

export default HomePage;
