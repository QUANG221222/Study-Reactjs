import { useState } from "react";
import QUESTION from "../questions";
import { shuffleArray } from "../../Thuattoan/main";
import QuizCompleImg from "../assets/quiz-complete.png";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  // Kiểm tra xem đã kết thúc câu hỏi chưa
  const quizComplete = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  };

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={QuizCompleImg} alt="complete quiz" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTION[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {shuffleArray(QUESTION[activeQuestionIndex].answers).map(
              (answer) => (
                <li id={answer} className="answer">
                  <button onClick={handleSelectAnswer}>{answer}</button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Quiz;
