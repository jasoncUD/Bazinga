import React from "react";
import "./Progress.css";
import { Student } from "../../../interfaces/student";

interface ProgressProps {
  student: Student;
}

function Progress(props: ProgressProps) {
  const { incompleteCourses, completedCourses } = props.student;

  // Check if both lists are empty
  const noCoursesAdded = incompleteCourses.length === 0 && completedCourses.length === 0;

  return (
    <div>
      <div className="header1">
        <h1>Progress</h1>
        <div className="student-info">
          {noCoursesAdded ? (
            <p>No courses have been added.</p>
          ) : (
            <>
              <p>Topics To Improve:</p>
              <ul>
                {incompleteCourses && incompleteCourses.map((course, index) => (
                  <li key={index}>{course.name}</li>
                ))}
              </ul>
              <p>Completed Courses:</p>
              <ul>
                {completedCourses && completedCourses.map((course, index) => (
                  <li key={index}>{course.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Progress;
