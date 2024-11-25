import React, { useState, useEffect, useRef } from "react";

export default function StopWatch() {
  const [time, setTime] = useState({ milliseconds: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clear interval on component unmount
  }, []);

  const startStopWatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          let newMilliseconds = prevTime.milliseconds + 10;
          let newSeconds = prevTime.seconds;

          if (newMilliseconds >= 1000) {
            newMilliseconds = 0;
            newSeconds += 1;
          }

          return { milliseconds: newMilliseconds, seconds: newSeconds };
        });
      }, 10); // 10 milliseconds for accurate timing
    }
  };

  const pauseStopWatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({ milliseconds: 0, seconds: 0 });
  };

  const resumeStopWatch = () => {
    startStopWatch();
  };

  const formatTime = ({ seconds, milliseconds }) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    const millis = Math.floor(milliseconds / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${secs}:${millis}`;
  };

  return (
    <div className="stopWatch">
      <div className="time mb-3">
        <h3>{formatTime(time)}</h3>
      </div>
      {!isRunning && time.seconds === 0 && time.milliseconds === 0 && (
        <button onClick={startStopWatch} className="btn btn-dark fs-3 ps-5 pe-5">
          Start
        </button>
      )}
      {isRunning && (
        <button onClick={pauseStopWatch} className="btn btn-dark fs-3 ps-5 pe-5">
          Pause
        </button>
      )}
      {!isRunning && (time.seconds > 0 || time.milliseconds > 0) && (
        <button onClick={resumeStopWatch} className="btn btn-dark fs-3 ps-5 pe-5">
          Resume
        </button>
      )}
      <button onClick={resetStopWatch} className="btn btn-dark fs-3 ps-5 pe-5">
        Reset
      </button>
    </div>
  );
}
