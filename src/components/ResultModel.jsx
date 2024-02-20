import { forwardRef } from "react";

const ResultModel = forwardRef(({ result, targetTime }, ref) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target timer was <strong>{targetTime}</strong>seconds.
      </p>
      <p>
        You stopped the timer at <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModel;
