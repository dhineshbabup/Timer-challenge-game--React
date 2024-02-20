import { useRef, useState } from "react";

export default function TimerChallenge({ title, timer }) {
  const timerRef = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const handleStart = () => {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
    }, timer * 1000);
    setTimeStarted(true);
  };
  const handleStop = () => {
    clearTimeout(timerRef.current);
  };
  return (
    <div className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>you lost!</p>}
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
  );
}
