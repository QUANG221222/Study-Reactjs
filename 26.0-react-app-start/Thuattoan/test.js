import QUESTIONS from "../src/questions.js";

function suffleArray(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const result = suffleArray(...QUESTIONS[1].answers);
console.log(result);
