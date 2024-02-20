import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, timer }) {
  const timerRef = useRef();
  const dialogRef = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const handleStart = () => {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current.showModal();
    }, timer * 1000);
    setTimeStarted(true);
  };
  const handleStop = () => {
    clearTimeout(timerRef.current);
  };
  return (
    <>
      <ResultModel ref={dialogRef} targetTime={timer} result="lost" />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {timer} second{timer > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {!timeStarted ? "Start" : "Stop"} button
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is running" : "inactive"}
        </p>
      </div>
    </>
  );
}
