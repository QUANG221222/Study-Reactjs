import { useState, useRef } from "react";

function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const handleClick = () => {
    const handlePlayerName = playerName.current.value;
    if (handlePlayerName === "") return;
    setEnteredPlayerName(handlePlayerName);
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "No Name"}</h2>
      <div>
        {/* playerName sẽ đại diện cho ô input */}
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}

export default Player;
