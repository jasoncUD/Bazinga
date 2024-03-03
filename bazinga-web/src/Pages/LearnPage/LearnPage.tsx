import React, { FC, useState } from "react";
import "./LearnPage.css";
import Categories from "./Categories/Categories";

interface LearnPageProps {
  setIsBazinga: (isBazinga: boolean) => void;
}

const LearnPage: FC<LearnPageProps> = ({ setIsBazinga }) => {
  const [task, setTask] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [isCategories, setIsCategories] = useState(false);
  const [student, setStudent] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    age: 0,
    gradeLevel: "",
    completedCourses: [""],
    incompleteCourses: [""],
  });

  const changeTask = (task: string) => {
    setTask(task);

    const changeSubject = (subject: string) => {
      setSubject(subject);
    };
  };
  const goToCategory = () => {
    if (task && subject) {
      const storedUserData = localStorage.getItem('user');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setStudent(userData);
      }
      if (task === "Practice") {
        const requestBody = {
          subject: subject,
          age: student.age,
          gradeLevel: student.gradeLevel
        };
        fetch("http://localhost:8080/api/chatgpt/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then((res) => res.json())
        .then((data) => {
          console.log(data.choices[0].message.content);
        if (data.userId) {
            alert("You have successfully logged in!");
        } else {
            alert(data.message || "Input data is wrong");
        }
        })
        .catch((error) => {
        console.error("Generation error:", error);
        alert("An error occurred during Category Generation. Please retry in one minute.");
        })
      }
      setIsCategories(true);
    }
    setIsBazinga(false);
  };

  return (
    <>
      {!isCategories && (
        <>
          <div className="button-container1">
            <button
              className="button1"
              style={{
                backgroundColor: task === "Practice" ? "green" : "#ff914d",
              }}
              onClick={() => setTask("Practice")}
            >
              Practice
            </button>
            <button
              className="button1"
              style={{
                backgroundColor: task === "Take a lesson" ? "green" : "#ff914d",
              }}
              onClick={() => setTask("Take a lesson")}
            >
              Take a lesson
            </button>
            <button
              className="button1"
              style={{
                backgroundColor:
                  task === "Learn something new" ? "green" : "#ff914d",
              }}
              onClick={() => setTask("Learn something new")}
            >
              Learn something new
            </button>
          </div>
          <div className="button-container1">
            <button
              className="button1"
              style={{
                backgroundColor: subject === "Math" ? "green" : "#ff914d",
              }}
              onClick={() => setSubject("Math")}
            >
              Math
            </button>
            <button
              className="button1"
              style={{
                backgroundColor: subject === "Science" ? "green" : "#ff914d",
              }}
              onClick={() => setSubject("Science")}
            >
              Science
            </button>
            <button
              className="button1"
              style={{
                backgroundColor: subject === "English" ? "green" : "#ff914d",
              }}
              onClick={() => setSubject("English")}
            >
              English
            </button>
          </div>

          <div className="button-container3">
            <button className="button1" onClick={goToCategory}>
              Continue
            </button>
          </div>
        </>
      )}
      {isCategories && task !== null && subject !== null && (
        <Categories task={task} subject={subject} />
      )}
    </>
  );
};

export default LearnPage;
