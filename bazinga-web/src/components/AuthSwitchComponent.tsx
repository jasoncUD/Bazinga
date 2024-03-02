// AuthSwitchComponent.tsx
import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

const AuthSwitchComponent: React.FC = () => {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div>
            <button onClick={() => setIsLoginView(!isLoginView)}>
                Switch to {isLoginView ? "Register" : "Login"}
            </button>
            {isLoginView ? <LoginComponent /> : <RegisterComponent />}
        </div>
    );
};

export default AuthSwitchComponent;
