// LoginPage.tsx
import React from 'react';
import AuthSwitchComponent from '../../components/AuthSwitchComponent';

const LoginPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Bazinga</h1>
            <AuthSwitchComponent />
        </div>
    );
};

export default LoginPage;
