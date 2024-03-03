import React, { useState } from 'react';
import './RegisterComponent.css';

interface RegisterComponentProps {
    handleLogin: (status: boolean) => void;
  }

const RegisterComponent: React.FC<RegisterComponentProps> = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleLogin(true);
        console.log({ username, password, age, gradeLevel });
        localStorage.setItem('isLoggedIn', 'true');

    };

    return (
        <div className="registerContainer">
            <form onSubmit={handleSubmit}>
                <h2 className="registerHeading">Register</h2>
                <div className="registerField">
                    <label className="registerLabel">Username:</label>
                    <input className="registerInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="registerField">
                    <label className="registerLabel">Password:</label>
                    <input className="registerInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="registerField">
                    <label className="registerLabel">Age:</label>
                    <input className="registerInput" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="registerField">
                    <label className="registerLabel">Grade Level:</label>
                    <input className="registerInput" type="number" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} />
                </div>
                <button className="registerButton" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterComponent;
