import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function ResultModal({ ref, remainingTime, targetTime, onReset }) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const dialogInside = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogInside.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogInside} className="result-modal">
      {userLost && <p>You Lost</p>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        Thời gian đích : <strong>{targetTime} second</strong>
      </p>
      <p>
        Bạn còn <strong>{formattedRemainingTime} second</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

export default ResultModal;
