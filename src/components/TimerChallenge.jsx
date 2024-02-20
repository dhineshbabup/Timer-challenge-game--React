import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, timer }) {
  const timerRef = useRef();
  const dialogRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(timer * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < timer * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  }
  function handleReset() {
    setTimeRemaining(timer * 1000);
  }
  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
    setTimeStarted(true);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  };
  return (
    <>
      <ResultModel
        ref={dialogRef}
        targetTime={timer}
        onReset={handleReset}
        timeRemaining={timeRemaining}
      />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {timer} second{timer > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {!timeIsActive ? "Start" : "Stop"} button
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running" : "inactive"}
        </p>
      </div>
    </>
  );
}
