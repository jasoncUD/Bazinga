import React, { FC, useState } from "react";
import "./Playing.css";
import { Question } from "../../../interfaces/question";

interface PlayingProps {
  task: string;
  subject: string;
}

function Playing(props: PlayingProps) {
  const [sampleQuestion, setSampleQuestion] = useState<Question>({
    question: "What is the capital of France?",
    option1: "Paris",
    option2: "London",
    option3: "New York",
    optionCorrect: "Paris",
  });
  return (
    <div>
        <h1>Get the prompt for {props.task} and {props.subject} </h1> 
        <h2>{sampleQuestion.question}</h2>
        <button>{sampleQuestion.option1}</button>
        <button>{sampleQuestion.option2}</button>
        <button>{sampleQuestion.option3}</button>
        

    </div>
  );
};

export default Playing;
