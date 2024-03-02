import React from 'react';
import './instructor.css';

export {};

export const Instructor: React.FC = () => {
    return (
      <div className="instructor-container">
        <h1 className="instructor">Hello Instructor</h1>
        <div className="button-container">
          <button className="button">My Classroom</button>
          <button className="button">My Courses</button>
        </div>
      </div>
    );
  };