import React, { useState, useEffect } from "react";

export default function GuessNumber() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [randomValue, setRandomValue] = useState(null);

  useEffect(() => {
    const value = Math.floor(Math.random() * 20) + 1;
    setRandomValue(value);
  }, []);
  console.log(randomValue);

  function handleNumber(e) {
    const value = parseInt(e.target.value);
    setNumber(value);

    if (value === randomValue) {
      setMessage("Correct!");
    } else if (value > randomValue) {
      setMessage("Too high!");
    } else {
      setMessage("Too low!");
    }
  }

  return (
    <div className="container text-center">
      <h3>Guess Number Between 1 to 20</h3>
      <input type="number" placeholder="Enter your guess..." onChange={handleNumber} value={number} />
      <h3>
        You Guessed: <span>{message}</span>
      </h3>
    </div>
  );
}
