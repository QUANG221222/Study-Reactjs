import { useState } from "react";
import QUESTION from "../questions";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  };
  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTION[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {QUESTION[activeQuestionIndex].answers.map((answer) => (
              <li id={answer} className="answer">
                <button onClick={handleSelectAnswer}>{answer}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Quiz;
