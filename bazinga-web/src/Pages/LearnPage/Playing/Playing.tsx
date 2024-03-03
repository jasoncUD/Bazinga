import React, { FC, useState } from "react";
import "./Playing.css";

interface PlayingProps {
  task: string;
  subject: string;
}

function Playing(props: PlayingProps) {

  return (
    <div>
        <h1>Get the prompt for {props.task} and {props.subject} </h1>
    </div>
  );
};

export default Playing;
