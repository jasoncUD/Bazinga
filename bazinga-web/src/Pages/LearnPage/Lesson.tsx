import React, { FC, useState, useEffect } from "react";
import "./Lesson.css";

interface LessonProps {
  categoryLesson: string;
  setIsShowCategory: (isShowCategory: boolean) => void;
  setIsLesson: (isPlaying: boolean) => void;
}

const Lesson: FC<LessonProps> = (props) => {
  const backToRoadMap = () => {
    props.setIsShowCategory(true);
    props.setIsLesson(false);
  };
  // fetch("http://localhost:8080/user/incompleteCourses", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(requestBody),
  // })
  //   .then((res) => res.json())
  //   .then((responseData) => {
  //     console.log(responseData);
  //     if (responseData) {
  //       setStudent(JSON.parse(responseData));
  //       setCategoryList(student.incompleteCourses);
  //     } else {
  //       alert(responseData.message || "Input data is wrong");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Generation error:", error);
  //     alert(
  //       "An error occurred during Category Generation. Please retry in one minute."
  //     );
  //   });

  const data = localStorage.getItem("user");
  let userData; // Declare the userData variable outside of the if statement
  if (data) {
    userData = JSON.parse(data); // Assign a value to the userData variable
  }

  return (
    <div className="container">
      <h1>Learn {props.categoryLesson}</h1>
      <h1>Grade Level: {userData.gradeLevel}</h1>
      <p>Youtube Link!</p>
      <button onClick={backToRoadMap}>Back</button>
    </div>
  );
};

export default Lesson;
