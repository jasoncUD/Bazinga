import React from "react";
import "./Progress.css";
import { Student } from "../../../interfaces/student";

interface ProgressProps {
  student: Student;
}

function Progress(props: ProgressProps) {
  const { incompleteCourses, completedCourses } = props.student;

  // Check if both lists are empty
  const noCoursesAdded = incompleteCourses === null && completedCourses === null;

  return (
    <div>
      <div className="header1">
        <h1>Progress</h1>
        <div className="student-info">
          {/* Display message if no courses have been added */}
          {noCoursesAdded ? (
            <p>No courses have been added.</p>
          ) : (
            <>
              <p>Topics To Improve:</p>
              <ul>
                {incompleteCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
              <p>Completed Courses:</p>
              <ul>
                {completedCourses.map((course, index) => (
                  <li key={index}>{course}</li>
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
