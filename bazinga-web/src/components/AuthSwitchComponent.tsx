import React, { useState, useEffect } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

const AuthSwitchComponent: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [isLoginView, setIsLoginView] = useState(true);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsAuthenticated(loggedIn);
    }, []);

    const handleLoginSuccess = () => {
        localStorage.setItem('isLoggedIn', 'true'); 
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsAuthenticated(false); 
    };

    return (
        <div>
            {isAuthenticated ? (
                <button onClick={handleLogout}>
                    Logout
                </button>
            ) : (
                <>
                    <button onClick={() => setIsLoginView(!isLoginView)}>
                        Switch to {isLoginView ? "Register" : "Login"}
                    </button>
                    {isLoginView ? (
                        <LoginComponent onLoginSuccess={handleLoginSuccess} />
                    ) : (
                        <RegisterComponent onLoginSuccess={handleLoginSuccess}/>
                    )}
                </>
            )}
        </div>
    );
};

export default AuthSwitchComponent;
