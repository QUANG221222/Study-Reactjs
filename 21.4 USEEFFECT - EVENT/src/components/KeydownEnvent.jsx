import { useEffect } from "react";

function KeydownEvent() {
  useEffect(() => {
    const handleKeydown = (event) => {
      console.log("Key pressed:", event.key);

      if (event.key) {
        console.log("Phím đã được nhấn");
      }
    };

    window.addEventListener("keydown", handleKeydown);
    console.log("Đã add event keydown!");

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      console.log("Đã remove event keydown!");
    };
  }, []);

  return (
    <div>
      <h3>Phím được nhấn</h3>
    </div>
  );
}

export default KeydownEvent;
