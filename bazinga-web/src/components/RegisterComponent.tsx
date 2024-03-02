import React, { useState } from 'react';
import './RegisterComponent.css';

interface RegisterComponentProps {
    onLoginSuccess: () => void;
}

const RegisterComponent: React.FC<RegisterComponentProps> = ({onLoginSuccess}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle registration logic here
        console.log({ username, password, age, gradeLevel });
        localStorage.setItem('isLoggedIn', 'true');
        onLoginSuccess();
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Grade Level:</label>
                    <input type="number" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterComponent;
