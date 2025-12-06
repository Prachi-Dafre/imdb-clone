import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">⏱ Timer: {time} seconds</h1>

      <button
        onClick={startTimer}
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
      >
        Start
      </button>

      <button
        onClick={pauseTimer}
        className="bg-yellow-500 text-white px-4 py-2 rounded m-2"
      >
        Pause
      </button>

      <button
        onClick={resetTimer}
        className="bg-red-600 text-white px-4 py-2 rounded m-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
