import React, { FC, useState, useEffect } from "react";
import "./Lesson.css";

interface LessonProps {
  categoryLesson: string;
  setIsShowCategory: (isShowCategory: boolean) => void;
  setIsLesson: (isPlaying: boolean) => void;
}

const Lesson: FC<LessonProps> = (props) => {
  const [youTubeLink, setYouTubeLink] = useState("");
  const backToRoadMap = () => {
    props.setIsShowCategory(true);
    props.setIsLesson(false);
  };
  const data = localStorage.getItem("user");
  let userData; // Declare the userData variable outside of the if statement
  if (data) {
    userData = JSON.parse(data); // Assign a value to the userData variable
  }

  const requestBody = {
    query: `{props.categoryLesson}${userData.gradeLevel}`,
  };

  fetch("http://localhost:8080/api/youtube/search", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((res) => res.json())
    .then((responseData) => {
      console.log(responseData);
      if (responseData) {
        setYouTubeLink(JSON.parse(responseData));
        console.log("Youtube link:" + youTubeLink);
      } else {
        alert(responseData.message || "Input data is wrong");
      }
    })
    .catch((error) => {
      console.error("Generation error:", error);
      alert(
        "An error occurred during Category Generation. Please retry in one minute."
      );
    });

  

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
