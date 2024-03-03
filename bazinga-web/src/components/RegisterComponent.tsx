import React, { useState } from 'react';
import './RegisterComponent.css';

interface RegisterComponentProps {
    handleLogin: (status: boolean) => void;
  }

const RegisterComponent: React.FC<RegisterComponentProps> = ({ handleLogin }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, username, password, email, age, gradeLevel }),
        }).then((res) => res.json())
        .then((data) => {
        if (data.userId) {
            alert("You have successfully logged in!");
            localStorage.setItem('id', data.userId);
            localStorage.setItem('isLoggedIn', 'true');
            handleLogin(true);
        } else {
            alert(data.message || "Registration error");
        }
        })
        .catch((error) => {
        console.error("Registration error:", error);
        alert("An error occurred during Registration.");
        })
    };

    return (
        <div className="registerContainer">
          <form onSubmit={handleSubmit}>
            {/* Container for the first three fields */}
            <div className="fieldContainer">
              <div className="registerField">
                <label className="registerLabel">Name:</label>
                <input className="registerInput" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="registerField">
                <label className="registerLabel">Username:</label>
                <input className="registerInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="registerField">
                <label className="registerLabel">Password:</label>
                <input className="registerInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
      
            {/* Container for the last three fields */}
            <div className="fieldContainer">
              <div className="registerField">
                <label className="registerLabel">Email:</label>
                <input className="registerInput" type="string" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="registerField">
                <label className="registerLabel">Age:</label>
                <input className="registerInput" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="registerField">
                <label className="registerLabel">Grade Level:</label>
                <input className="registerInput" type="number" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} />
              </div>
            </div>
      
            <button className="registerButton" type="submit">Register</button>
          </form>
        </div>
      );
};

export default RegisterComponent;
