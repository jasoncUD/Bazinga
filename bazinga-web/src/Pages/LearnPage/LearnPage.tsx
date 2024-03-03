import React, { FC, useState } from "react";
import "./LearnPage.css";
import Categories from "./Categories/Categories";
import { Category } from "../../interfaces/category";
import LessonCategories from "./Categories/LessonCategories";

interface LearnPageProps {
  setIsBazinga: (isBazinga: boolean) => void;
}

const LearnPage: FC<LearnPageProps> = ({ setIsBazinga }) => {
  const [task, setTask] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [isCategories, setIsCategories] = useState(false);
  const [isLessonCategories, setIsLessonCategories] = useState(false);
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
  //make a categoryList array that takes in the category.ts interface
  const categoryList: Category[] = [
    {
      name: "Shapes",
      correct: 0,
      incorrect: 0,
      questions: [
        {
          question: "What is the shape of a circle?",
          option1: "Square",
          option2: "Triangle",
          option3: "Circle",
          answer: "Circle",
          feedback: "A circle is a round shape!",
        },
        {
          question: "What is the shape of a triangle?",
          option1: "Square",
          option2: "Triangle",
          option3: "Circle",
          answer: "Triangle",
          feedback: "A triangle has three sides!",
        },
        {
          question: "What is the shape of a square?",
          option1: "Square",
          option2: "Triangle",
          option3: "Circle",
          answer: "Square",
          feedback: "A square has four equal sides!",
        },
      ],
    },
    {
      name: "Addition",
      correct: 0,
      incorrect: 0,
      questions: [
        {
          question: "What is 2 + 2?",
          option1: "4",
          option2: "5",
          option3: "6",
          answer: "4",
          feedback: "2 + 2 = 4!",
        },
        {
          question: "What is 5 + 3?",
          option1: "8",
          option2: "9",
          option3: "10",
          answer: "8",
          feedback: "5 + 3 = 8!",
        },
        {
          question: "What is 7 + 4?",
          option1: "10",
          option2: "11",
          option3: "12",
          answer: "11",
          feedback: "7 + 4 = 11!",
        },
      ],
    },
    {
      name: "Subtraction",
      correct: 0,
      incorrect: 0,
      questions: [
        {
          question: "What is 5 - 2?",
          option1: "3",
          option2: "4",
          option3: "5",
          answer: "3",
          feedback: "5 - 2 = 3!",
        },
        {
          question: "What is 8 - 3?",
          option1: "4",
          option2: "5",
          option3: "6",
          answer: "5",
          feedback: "8 - 3 = 5!",
        },
        {
          question: "What is 10 - 4?",
          option1: "5",
          option2: "6",
          option3: "7",
          answer: "6",
          feedback: "10 - 4 = 6!",
        },
      ],
    },
    {
      name: "Multiplication",
      correct: 0,
      incorrect: 0,
      questions: [
        {
          question: "What is 2 * 2?",
          option1: "4",
          option2: "5",
          option3: "6",
          answer: "4",
          feedback: "2 * 2 = 4!",
        },
        {
          question: "What is 5 * 3?",
          option1: "8",
          option2: "15",
          option3: "10",
          answer: "15",
          feedback: "5 * 3 = 15!",
        },
      ],
    },
    {
      name: "Division",
      correct: 0,
      incorrect: 0,
      questions: [
        {
          question: "What is 10 / 2?",
          option1: "3",
          option2: "4",
          option3: "5",
          answer: "5",
          feedback: "10 / 2 = 5!",
        },
        {
          question: "What is 15 / 3?",
          option1: "4",
          option2: "5",
          option3: "6",
          answer: "5",
          feedback: "15 / 3 = 5!",
        },
      ],
    },
  ];
  const changeTask = (task: string) => {
    setTask(task);

    const changeSubject = (subject: string) => {
      setSubject(subject);
    };
  };
  const goToCategory = () => {
    if (task && subject) {
      const storedUserData = localStorage.getItem("user");
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setStudent(userData);
      }
      if (task === "Take a lesson") {
        setIsLessonCategories(true);
      }
      if (task === "Practice") {
        const requestBody = {
          subject: subject,
          age: student.age,
          gradeLevel: student.gradeLevel,
        };
        fetch("http://localhost:8080/api/chatgpt/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        })
          .then((res) => res.json())
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
            alert(
              "An error occurred during Category Generation. Please retry in one minute."
            );
          });
        setIsCategories(true);
      }
    }
    setIsBazinga(false);
  };

  return (
    <>
      {!isCategories && !isLessonCategories && (
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
        <Categories categoryList={categoryList} />
      )}
      {isLessonCategories && task !== null && subject !== null && (
        <LessonCategories categoryList={categoryList} />
      )}
    </>
  );
};

export default LearnPage;
