import React, { FC, useState, useEffect } from "react";
import "./Lesson.css";
import { Category } from "../../interfaces/category";

interface LessonProps {
  categoryLesson: string;
  setIsShowCategory: (isShowCategory: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

const Playing: FC<LessonProps> = (props) => {
  const backToRoadMap = () => {
    props.setIsShowCategory(true);
    props.setIsPlaying(false);
  };

  const data = localStorage.getItem("user");
  let userData; // Declare the userData variable outside of the if statement
  if (data) {
    userData = JSON.parse(data); // Assign a value to the userData variable
  }

  return (
    <div className="container">
      <h1>Learn {props.categoryLesson}</h1>
      <h1>Let's Learn For Grade Level: {userData.gradeLevel}</h1>
      <p>Youtube Link!</p>
      <button onClick={backToRoadMap}>Back</button>
    </div>
  );
};

export default Playing;
