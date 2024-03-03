// LoginPage.tsx
import React from 'react';
import AuthSwitchComponent from '../../components/AuthSwitchComponent';
import './LoginPage.css'

interface LoginPageProps {
    isLoggedIn: boolean;
    handleLogin: (status: boolean) => void;
  }
  

const LoginPage: React.FC<LoginPageProps> = ({ isLoggedIn, handleLogin }) => {
    return (
        <div>
            <h1 className='welcomeText'>Welcome to Bazinga</h1>
            <AuthSwitchComponent isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
