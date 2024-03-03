import React, { FC, useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./Playing.css";
import { QuestionTemp } from "../../../interfaces/questionTemp"; // Ensure this path is correct

interface PlayingProps {
  questionList: QuestionTemp[];
  setIsShowCategory: (isShowCategory: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  updateCategoryCorrect: () => void; // Callback function to update category correct count
}

const Playing: FC<PlayingProps> = ({
  questionList,
  setIsShowCategory,
  setIsPlaying,
  updateCategoryCorrect,
}) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    const currentQuestion = questionList[questionIndex];
    // Assuming your QuestionTemp's options field is an array of strings
    const shuffledOptions = shuffleArray(currentQuestion.options);
    setOptions(shuffledOptions);
  }, [questionList, questionIndex]);

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    } else {
      console.error("Speech synthesis not supported by your browser.");
    }
  };

  const handleOptionClick = (option: string) => {
    const currentQuestion = questionList[questionIndex];
    if (option === currentQuestion.answer) { // Assuming 'answer' is the index of the correct option
      // Correct answer
      setShowConfetti(true);
      setIsCorrect(true);
      setIsWrong(false);
      setTimeout(() => setShowConfetti(false), 3000);
      updateCategoryCorrect(); // Update category correct count
    } else {
      // Incorrect answer
      setShowConfetti(false);
      setIsWrong(true);
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex === questionList.length - 1) {
      setIsPlaying(false);
      setIsShowCategory(true);
      setShowResults(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
    setIsCorrect(false);
    setIsWrong(false);
  };

  return (
    <div className="container">
      {showConfetti && <Confetti />}
      <h1 className="header11">Question #{questionIndex + 1}:</h1>
      <h2 className="header2">{questionList[questionIndex].question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          className="buttons12"
        >
          {option}
        </button>
      ))}
      <button onClick={() => speak(questionList[questionIndex].question)} className="readbutton">
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
