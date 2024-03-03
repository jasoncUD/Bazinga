import React, { FC, useState } from "react";
import "./Progress.css";
import { Student } from "../../../interfaces/student";

interface ProgressProps {
  student: Student;
}

function Progress(props: ProgressProps) {
  return (
    <div>
      <div className="header1">
        <h1>Progress</h1>
        <div className="student-info">
          <p>Topics To Improve:</p>
          <ul>
            {props.student.incompleteCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <p>Completed Courses:</p>
          <ul>
            {props.student.completedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Progress;
