import React, { FC, useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./Playing.css";
import { Question } from "../../../interfaces/question";

interface PlayingProps {
  questionList: Question[];
  setIsShowCategory: (isShowCategory: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

const Playing: FC<PlayingProps> = (props) => {
  

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    const currentQuestion = props.questionList[questionIndex];
    // Gather all options and the answer into an array

    const optionsArray = [
      currentQuestion.option1,
      currentQuestion.option2,
      currentQuestion.option3,
      currentQuestion.answer,
    ];
    const shuffledOptions = shuffleArray(optionsArray);
    setOptions(shuffledOptions);
  }, [props.questionList, questionIndex]);

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1; // Speed of speech
      utterance.pitch = 1; // Pitch of speech
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech!");
    }
  };

  const handleOptionClick = (option: string) => {
    const currentQuestion = props.questionList[questionIndex];
    if (option === currentQuestion.answer) {
      // Correct answer, show confetti
      setShowConfetti(true);
      setIsCorrect(true);
      setIsWrong(false);
      setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    } else {
      // Incorrect answer
      setShowConfetti(false);
      setIsWrong(true);
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex === props.questionList.length - 1) {
      // Last question, show results
      props.setIsPlaying(false);
      props.setIsShowCategory(true);
      setShowResults(true);
    } else {
      // Increment question index
      setQuestionIndex(questionIndex + 1);
    }
    // Reset answer states
    setIsCorrect(false);
    setIsWrong(false);
  };

  return (
    <div className="container">
      {showConfetti && <Confetti />}
      <h1 className="header11">Question #{questionIndex + 1}:</h1>
      <h2 className="header2">{props.questionList[questionIndex].question}</h2>
      {/* Render option buttons in randomized order */}
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          className="buttons12"
        >
          {option}
        </button>
      ))}
      <button
  onClick={() => speak(props.questionList[questionIndex].question)}
  className="readbutton"
>
  Read Question
</button>
      {isWrong && !showResults && (
  <div className="incorrect">
    incorrect <button className='nextbutton' onClick={handleNextQuestion}>Next</button>{" "}
  </div>
)}
      {isCorrect && !showResults && (
  <div className="correct">
    Correct! <button className="nextbutton" onClick={handleNextQuestion}>Next</button>{" "}
  </div>
)}

    </div>
  );
};

export default Playing;
