import React, { useState } from "react";
import style from "./style.module.css";

export default function Rock() {
  const [choiceThing, setChoiceThing] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [myCounter, setMyCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);

  function handleGame(e) {
    const arr = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    let userChoice = e.target.innerHTML;
    let computerRandomChoice = arr[randomIndex];

    let myNewCounter = myCounter;
    let computerNewCounter = computerCounter;

    if (userChoice === "Rock" && computerRandomChoice === "Paper") {
      computerNewCounter += 1;
    } else if (userChoice === "Paper" && computerRandomChoice === "Rock") {
      myNewCounter += 1;
    } else if (userChoice === "Scissors" && computerRandomChoice === "Paper") {
      myNewCounter += 1;
    } else if (userChoice === "Paper" && computerRandomChoice === "Scissors") {
      computerNewCounter += 1;
    } else if (userChoice === "Rock" && computerRandomChoice === "Scissors") {
      myNewCounter += 1;
    } else if (userChoice === "Scissors" && computerRandomChoice === "Rock") {
      computerNewCounter += 1;
    }

    setChoiceThing(userChoice);
    setComputerChoice(computerRandomChoice);
    setMyCounter(myNewCounter);
    setComputerCounter(computerNewCounter);
  }

  return (
    <div className={`${style.wrapper} text-center`}>
      <div className="container pt-5">
        <h2 className="text-uppercase text-info">Welcome to rock, paper, scissors game</h2>
        <div className="buttons w-25 d-flex justify-content-between m-auto pt-3">
          <button onClick={(event) => handleGame(event)} className="btn btn-info p-2 border pilled-2 text-white">
            Rock
          </button>
          <button onClick={(event) => handleGame(event)} className="btn btn-info p-2 border pilled-2 text-white">
            Paper
          </button>
          <button onClick={(event) => handleGame(event)} className="btn btn-info p-2 border pilled-2 text-white">
            Scissors
          </button>
        </div>
        <div className="choice pt-3">
          <h4>
            Your Choice: <span>{choiceThing}</span>
          </h4>
          <h4>
            Computer's Choice: <span>{computerChoice}</span>
          </h4>
        </div>
        <div className="score pt-3">
          <h2>
            Your Score: <span>{myCounter}</span>
          </h2>
          <h2>
            Computer's Score: <span>{computerCounter}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
