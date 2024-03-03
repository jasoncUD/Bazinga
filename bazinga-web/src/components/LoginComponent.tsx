import React, { useState } from 'react';
import './LoginComponent.css';

interface LoginComponentProps {
    handleLogin: (status: boolean) => void;
  }
  

const LoginComponent: React.FC<LoginComponentProps> = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ username, password });
        handleLogin(true);
        localStorage.setItem('isLoggedIn', 'true');

    };

    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <h2 className="loginHeading">Login</h2>
                <div className="loginField">
                    <label className="loginLabel">Username:</label>
                    <input className="loginInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="loginField">
                    <label className="loginLabel">Password:</label>
                    <input className="loginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="loginButton" type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;
