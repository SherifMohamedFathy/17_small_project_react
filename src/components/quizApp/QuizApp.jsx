import React, { useState } from "react";
import style from "./style.module.css";
import { questions } from "./data";

export default function QuizApp() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);

  function handleInput(questionId, option) {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option,
    });

    const currentQuestion = questions.find((q) => q.id === questionId);

    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setResult(true);
    }
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="wrapper container text-center">
      <h1 className="fw-bold pt-5 text-uppercase">Quiz App</h1>
      {!result && (
        <>
          <div className="questions">
            <div className="inputs" key={currentQuestion.id}>
              <h3>
                Question <span>{currentQuestion.id}</span>
              </h3>
              <h4>{currentQuestion.question}</h4>

              {currentQuestion.options.map((option, index) => (
                <div className={style.choice} key={index}>
                  <input
                    type="radio"
                    id={`option-${currentQuestion.id}-${index}`}
                    className="me-2"
                    name={`choice-${currentQuestion.id}`}
                    checked={selectedOptions[currentQuestion.id] === option}
                    onChange={() => handleInput(currentQuestion.id, option)}
                  />
                  <label
                    onClick={() => handleInput(currentQuestion.id, option)}
                    htmlFor={`option-${currentQuestion.id}-${index}`}
                    className="fs-5"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button onClick={nextQuestion} className="btn btn-primary ps-5 pe-5 mb-5">
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </>
      )}
      {result && (
        <div className="result">
          <h2>Results</h2>
          <h3>
            Your Score: <span className="fw-bold">{score}</span> out of{" "}
            <span className="fw-bold">{questions.length}</span>
          </h3>
        </div>
      )}
    </div>
  );
}
