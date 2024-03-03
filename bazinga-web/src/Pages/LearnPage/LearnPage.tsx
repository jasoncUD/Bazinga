import React, { FC, useState } from "react";
import "./LearnPage.css";
import Playing from "./Playing/Playing";

interface LearnPageProps {
  setIsBazinga: (isBazinga: boolean) => void;
}

const LearnPage: FC<LearnPageProps> = ({setIsBazinga}) => {
  const [task, setTask] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const changeTask = (task: string) => {
    setTask(task);

    const changeSubject = (subject: string) => {
      setSubject(subject);
    };
  };
  const goToPlaying = () => {
    if (task && subject) {
      setIsPlaying(true);
    }
    setIsBazinga(false);
  };
  return (
    <>
      {!isPlaying && (
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
            <button className="button1" onClick={goToPlaying}>
              Continue
            </button>
          </div>
        </>
      )}
      {isPlaying && task !== null && subject !== null && (
        <Playing task={task} subject={subject} />
      )}
    </>
  );
};

export default LearnPage;
