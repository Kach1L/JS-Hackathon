// ROUND LOGIC
// Start round
async function playNewRound(number) {
  const roundTopic = getRoundTopic(number);
  const roundDifficulty = getRoundDifficulty(number);
  resetTimer();
  // const roundData = await fetchQuestionAndAnswers();

  // Temporary stuff
  const question = quizQuestions[roundTopic][roundDifficulty]['question'];
  const answer1 = quizQuestions[roundTopic][roundDifficulty]['options'][0];
  const answer2 = quizQuestions[roundTopic][roundDifficulty]['options'][1];
  const answer3 = quizQuestions[roundTopic][roundDifficulty]['options'][2];
  const answer4 = quizQuestions[roundTopic][roundDifficulty]['options'][3];
  const correctAnswerText = quizQuestions[roundTopic][roundDifficulty]['correctAnswer'];

  // Buttons
  const firstAnswerButton = document.querySelector('.answer-button-1')
  const secondAnswerButton = document.querySelector('.answer-button-2')
  const thirdAnswerButton = document.querySelector('.answer-button-3')
  const fourthAnswerButton = document.querySelector('.answer-button-4')

  startTimer();
  displayQuestion(question);
  displayAnswers(answer1, answer2, answer3, answer4);

  // Answer buttons
  const userAnswerPromise = new Promise((resolve) => {
    firstAnswerButton.addEventListener('click', () => {
      firstAnswerButton.classList.add('answer-button-active');
      return resolve(firstAnswerButton.textContent)
    });
    secondAnswerButton.addEventListener('click', () => {
      secondAnswerButton.classList.add('answer-button-reversed-active');
      return resolve(secondAnswerButton.textContent)
    });
    thirdAnswerButton.addEventListener('click', () => {
      thirdAnswerButton.classList.add('answer-button-active');
      return resolve(thirdAnswerButton.textContent)
    });
    fourthAnswerButton.addEventListener('click', () => {
      fourthAnswerButton.classList.add('answer-button-reversed-active');
      return resolve(fourthAnswerButton.textContent)
    });
  });

  const userAnswerText = await userAnswerPromise;
  hideTimer();
  let isCorrect = false;
  isCorrect = isAnswerRight(userAnswerText, correctAnswerText);
  return new Promise((resolve) => {
    setTimeout(() => {
      firstAnswerButton.classList.remove('answer-button-active');
      secondAnswerButton.classList.remove('answer-button-reversed-active');
      thirdAnswerButton.classList.remove('answer-button-active');
      fourthAnswerButton.classList.remove('answer-button-reversed-active');
      resolve(isCorrect);
    }, 1000);
  });
}

// Check round topic by number
function getRoundTopic(number) {
  if (number >= 13) {
    return 'http';
  } else if (number >= 10 && number < 13) {
    return 'react';
  } else if (number >= 7 && number < 10) {
    return 'javascript';
  } else if (number >= 4 && number < 7) {
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

function displayAnswers(answer1, answer2, answer3, answer4) {
  const firstAnswerButton = document.querySelector('.answer-button-1')
  const secondAnswerButton = document.querySelector('.answer-button-2')
  const thirdAnswerButton = document.querySelector('.answer-button-3')
  const fourthAnswerButton = document.querySelector('.answer-button-4')

  firstAnswerButton.textContent = answer1;
  secondAnswerButton.textContent = answer2;
  thirdAnswerButton.textContent = answer3;
  fourthAnswerButton.textContent = answer4;
}

function isAnswerRight(userAnswerNumber, rightAnswerNumber) {
  return (userAnswerNumber === rightAnswerNumber);
}