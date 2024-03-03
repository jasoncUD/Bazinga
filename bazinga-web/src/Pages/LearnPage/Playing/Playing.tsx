import React, { FC, useState, useEffect } from "react";
import Confetti from 'react-confetti';
import "./Playing.css";
import { Question } from "../../../interfaces/question";

interface PlayingProps {
  task: string;
  subject: string;
}

const Playing: FC<PlayingProps> = (props) => {
  const [sampleQuestion, setSampleQuestion] = useState<Question>({
    question: "What is the capital of France?",
    option1: "Tokyo",
    option2: "London",
    option3: "New York",
    answer: "Paris",
  });

  const [options, setOptions] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    // Gather all options and the answer into an array
    const optionsArray = [
      sampleQuestion.option1,
      sampleQuestion.option2,
      sampleQuestion.option3,
      sampleQuestion.answer,
    ];
    // Shuffle the options
    const shuffledOptions = shuffleArray(optionsArray);
    setOptions(shuffledOptions);
  }, [sampleQuestion]);

  // Fisher-Yates (Knuth) Shuffle
  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1; // Speed of speech
      utterance.pitch = 1; // Pitch of speech
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech!");
    }
  };

  const handleOptionClick = (option: string) => {
    if (option === sampleQuestion.answer) {
      // Correct answer, show confetti
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000); // Hide confetti after 2 seconds
    } else {
      // Incorrect answer
      setShowConfetti(false);
    }
  };

  return (
    <div>
        {showConfetti && <Confetti />}
        <h1>Question #1 for {props.task} and {props.subject} </h1> 
        <h2>{sampleQuestion.question}</h2>
        {/* Render option buttons in randomized order */}
        {options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
        ))}
        {/* Button to read out the question */}
        <button onClick={() => speak(sampleQuestion.question)}>Read Question</button>
    </div>
  );
};

export default Playing;
