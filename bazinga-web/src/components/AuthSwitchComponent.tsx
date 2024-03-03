import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import './AuthSwitchComponent.css'; // Ensure you have this CSS file in your project

interface AuthSwitchComponentProps {
    isLoggedIn: boolean;
    handleLogin: (status: boolean) => void;
  }
  

const AuthSwitchComponent: React.FC<AuthSwitchComponentProps> = ({ isLoggedIn, handleLogin }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    

    return (
        <div>
            <button 
                className="switchButton"
                onClick={() => setIsLoginView(!isLoginView)}
            >
                Switch to {isLoginView ? "Register" : "Login"}
            </button>
            {isLoginView ? <LoginComponent handleLogin={handleLogin} /> : <RegisterComponent handleLogin={handleLogin}/>}
        </div>
    );
};

export default AuthSwitchComponent;
