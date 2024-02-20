import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(
  ({ timeRemaining, targetTime, onReset }, ref) => {
    const dialog = useRef();
    const userResult = timeRemaining <= 0;
    const formattedRemaingTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });
    return (
      <dialog ref={dialog} className="result-modal">
        {userResult && <h2>You lost</h2>}
        {!userResult && <h2>Your score: {score}</h2>}
        <p>
          The target timer was <strong>{targetTime}</strong>seconds.
        </p>
        <p>
          You stopped the timer at{" "}
          <strong>{formattedRemaingTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);
export default ResultModel;
