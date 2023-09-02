// ROUND LOGIC
// Start round
async function playNewRound(number) {
  const roundTopic = getRoundTopic(number);
  const roundDifficulty = getRoundDifficulty(number);

  const roundData = await fetchQuestionAndAnswers();
  const question = 'roundData.question';
  const answer1 = 'roundData.answer';
  const answer2 = 'roundData.answer';
  const answer3 = 'roundData.answer';
  const answer4 = 'roundData.answer';
  const rightAnswer = 'roundData.rightAnswer';

  let timerStatus = true;
  startTimer();
  displayQuestion();
  displayAnswers();
  getUserAnswer()
  const result = isAnswerRight()
}

// Check round topic by number
function getRoundTopic(number) {
  if (number >= 13) {
    return 'http';
  } else if (number >= 10 || number < 13) {
    return 'react';
  } else if (number >= 7 || number < 10) {
    return 'javascript';
  } else if (number >= 4 || number < 7) {
    return 'css';
  } else {
    return 'html';
  }
}

function getRoundDifficulty(number) {
  if ((number - 1) % 3 === 0 || number === 1) {
    return 'easy';
  }
  else if (number % 3 === 0) {
    return 'hard';
  } else {
    return 'medium';
  }
}

// Check round topic by number
function displayQuestion(question) {
  const questionParagraph = document.querySelector('.question')
  questionParagraph.textContent = question;
}

function displayAnswers(answers) {
  const firstAnswerButton = document.querySelector('.first-answer')
  const secondAnswerButton = document.querySelector('.second-answer')
  const thirdAnswerButton = document.querySelector('.third-answer')
  const fourthAnswerButton = document.querySelector('.fourth-answer')
  firstAnswerButton.textContent = answers[0];
  secondAnswerButton.textContent = answers[1];
  thirdAnswerButton.textContent = answers[2];
  fourthAnswerButton.textContent = answers[3];
}

function isAnswerRight(userAnswerNumber, rightAnswerNumber) {
  return (userAnswerNumber === rightAnswerNumber);
}

function getUserAnswer() {
  let userAnswer;
  const firstAnswerButton = document.querySelector('.first-answer')
  const secondAnswerButton = document.querySelector('.second-answer')
  const thirdAnswerButton = document.querySelector('.third-answer')
  const fourthAnswerButton = document.querySelector('.fourth-answer')

  firstAnswerButton.addEventListener('click', () => userAnswer = 1);
  secondAnswerButton.addEventListener('click', () => userAnswer = 2);
  thirdAnswerButton.addEventListener('click', () => userAnswer = 3);
  fourthAnswerButton.addEventListener('click', () => userAnswer = 4);

  return userAnswer;
}