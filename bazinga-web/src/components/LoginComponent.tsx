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
        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => res.json())
        .then((data) => {
        if (data.userId) {
            alert("You have successfully logged in!");
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('isLoggedIn', 'true');
            handleLogin(true);
        } else {
            alert(data.message || "Username or Password is wrong");
        }
        })
        .catch((error) => {
        console.error("Login error:", error);
        alert("An error occurred during Login.");
        })

    };

    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
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
