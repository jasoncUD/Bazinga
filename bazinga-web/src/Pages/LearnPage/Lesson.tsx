import React, { FC, useState, useEffect } from "react";
import "./Lesson.css";

interface LessonProps {
  setIsShowCategory: (isShowCategory: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

const Playing: FC<LessonProps> = (props) => {

    const backToRoadMap = () => {
        props.setIsShowCategory(true);
        props.setIsPlaying(false);
    };

  return (
    <div className="container">
      <h1>Let's Learn This</h1>
      <p>Youtube Link!</p>
      <button onClick={backToRoadMap}>Back</button>
    </div>
  );
};

export default Playing;