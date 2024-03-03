import React, { FC, useState, useEffect } from "react";
import "./Lesson.css";

interface LessonProps {
  categoryLesson: string;
  setIsShowCategory: (isShowCategory: boolean) => void;
  setIsLesson: (isPlaying: boolean) => void;
}

interface UserData {
  gradeLevel: string;
}

const Lesson: FC<LessonProps> = ({ categoryLesson, setIsShowCategory, setIsLesson }) => {
  const [youTubeLink, setYouTubeLink] = useState("");
  const [userData, setUserData] = useState<UserData>({ gradeLevel: '' }); // Initialize userData state

  useEffect(() => {
    const data = localStorage.getItem("user");
    setUserData(data ? JSON.parse(data) : { gradeLevel: '' }); // Update userData state

    // Now you would typically not send a body with a GET request, so ensure your API supports it
    const requestBody = {
      query: `${categoryLesson}${userData.gradeLevel}`, // Use template literal correctly here
    };

    // Assuming your API supports POST request here
    fetch("http://localhost:8080/api/youtube/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData) {
          setYouTubeLink(responseData); // Assume responseData contains an object with a 'link' property
        }
      })
      .catch((error) => {
      });
  }, [categoryLesson]); // Depend on categoryLesson

  const backToRoadMap = () => {
    setIsShowCategory(true);
    setIsLesson(false);
  };

  return (
    <div className="container">
      <h1>Learn {categoryLesson}</h1>
      {/* Access userData from state */}
      <h1>Grade Level: {userData.gradeLevel}</h1> 
      <p>Youtube Link: {youTubeLink}</p>
      <button onClick={backToRoadMap}>Back</button>
    </div>
  );
};

export default Lesson;
