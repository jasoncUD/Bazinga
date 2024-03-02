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
      
      {!isLearnPage && <><div className={`header ${backgroundClass}`}>
      </div><div className="button-container1">
          <button
            className="button"
            onClick={() => { } }>
            Test
          </button>
          <button onClick={showLearnPage}>Learn</button>
        </div></>}
        {isLearnPage && <LearnPage />}
      
    </div>
  );
};

export default HomePage;