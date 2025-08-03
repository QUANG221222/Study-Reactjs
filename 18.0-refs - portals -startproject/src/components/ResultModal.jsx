import { useImperativeHandle, useRef } from "react";

function ResultModal({ ref, remainingTime, targetTime, onReset }) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const dialogInside = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogInside.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialogInside} className="result-modal">
      {userLost && <p>You Lost</p>}
      <p>
        Thời gian đích : <strong>{targetTime} second</strong>
      </p>
      <p>
        Bạn còn <strong>{formattedRemainingTime} second</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
