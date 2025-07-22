import { useState, useRef } from "react";

function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [sumitted, setSubmitted] = useState(false);
  // const handleChange = (e) => {
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // };
  const handleClick = () => {
    if (enteredPlayerName === null) return;
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
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
