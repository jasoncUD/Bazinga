import React, { FC, useState } from "react";
import "./Playing.css";
import { Question } from "../../../interfaces/question";

interface PlayingProps {
  task: string;
  subject: string;
}

function Playing(props: PlayingProps) {
  const [sampleQuestion, setSampleQuestion] = useState<Question>();


  return (
    <div>
        <h1>Get the prompt for {props.task} and {props.subject} </h1> 

    </div>
  );
};

export default Playing;
