import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import './AuthSwitchComponent.css'; // Ensure you have this CSS file in your project

const AuthSwitchComponent: React.FC = () => {
    const [isLoginView, setIsLoginView] = useState(true);
    

    return (
        <div>
            <button 
                className="switchButton"
                onClick={() => setIsLoginView(!isLoginView)}
            >
                Switch to {isLoginView ? "Register" : "Login"}
            </button>
            {isLoginView ? <LoginComponent /> : <RegisterComponent />}
        </div>
    );
};

export default AuthSwitchComponent;
