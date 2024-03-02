import React, { FC, useState } from "react";
import "./HomePage.css"; // Make sure this is the correct path

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  const backgroundClass = showLogin ? 'blur-background' : '';

  return (
    <div>
      <div className={`header ${backgroundClass}`}>
      </div>
    </div>
  );
};

export default HomePage;