import React, { FC, useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./Playing.css";
import { Question } from "../../../interfaces/question";

interface PlayingProps {
  task: string;
  subject: string;
}

const Playing: FC<PlayingProps> = (props) => {
  const [sampleQuestions, setSampleQuestions] = useState<Question[]>([
    {
      question: "What is the capital of France?",
      option1: "Tokyo",
      option2: "London",
      option3: "New York",
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      option1: "Mars",
      option2: "Jupiter",
      option3: "Earth",
      answer: "Uranus",
    },
    {
      question: "What is the powerhouse of the cell?",
      option1: "Nucleus",
      option2: "Ribosome",
      option3: "Mitochondria",
      answer: "Mitochondria",
    },
    // Add more sample questions here
  ]);

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    const currentQuestion = sampleQuestions[questionIndex];
    // Gather all options and the answer into an array

    const optionsArray = [
      currentQuestion.option1,
      currentQuestion.option2,
      currentQuestion.option3,
      currentQuestion.answer,
    ];
    const shuffledOptions = shuffleArray(optionsArray);
    setOptions(shuffledOptions);
  }, [sampleQuestions, questionIndex]);

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
    const currentQuestion = sampleQuestions[questionIndex];
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
    if (questionIndex === sampleQuestions.length - 1) {
      // Last question, show results
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
      <h2 className="header2">{sampleQuestions[questionIndex].question}</h2>
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
        onClick={() => speak(sampleQuestions[questionIndex].question)}
        className="button12"
      >
        Read Question
      </button>
      {isWrong && !showResults && (
        <div>
          Incorrect <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
      {isCorrect && !showResults && (
        <div>
          Correct! <button onClick={handleNextQuestion}>Next Question</button>{" "}
        </div>
      )}
      {showResults && (
        <div>
          <button>Results</button>
        </div>
      )}

    </div>
  );
};

export default Playing;
