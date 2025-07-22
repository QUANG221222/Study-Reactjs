import { useState } from "react";

function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [sumitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  };
  const handleClick = () => {
    if (enteredPlayerName === null || enteredPlayerName === "") return;
    setSubmitted(true);
  };
  return (
    <section id="player">
      <h2>Welcome {sumitted ? enteredPlayerName : "No Name"}</h2>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </div>
    </section>
  );
}

export default Player;
