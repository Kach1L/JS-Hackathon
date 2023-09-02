async function startNewGame() {
  // Creating user or choosing an existing one
  const playerName = await createPlayer();

  // Alert a message with a rules
  alert('"Who Wants to Be a Programmer?" is a thrilling game where players test their coding knowledge and ' +
    'problem-solving skills. Contestants face a series of progressively challenging coding questions, each ' +
    'offering multiple-choice answers. To win the game and claim your first offer as a programmer, players ' +
    'must answer all questions correctly, with each correct answer bringing them closer to mastering the art of coding.');

  // After player press ok start a new round

  // If it is successful move to a next step, otherwise update user score and exit the program

  // If user passed all questions show success message  and update user score
}

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

  const questionParagraph = document.querySelector('.question')
  const firstAnswerButton = document.querySelector('.first-answer')
  const secondAnswerButton = document.querySelector('.first-answer')
  const thirdAnswerButton = document.querySelector('.first-answer')
  const fourthAnswerButton = document.querySelector('.first-answer')

  startTimer();
  setTimeout(() => {
    alert('Time is out!');
    return false;
  }, 60000)
  displayQuestion();
  displayAnswers();


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
  if (number % 4 === 0) {
    return 'easy';
  }
  else if (number % 3 === 0) {
    return 'hard';
  } else if (number % 2 === 0) {
    return 'medium';
  } else {
    return 'easy';
  }
}

// Check round topic by number
function displayQuestion(question) {
  const questionParagraph = document.querySelector('.question')
  questionParagraph.textContent = question;
}

function displayAnswers(answers) {
  const firstAnswerButton = document.querySelector('.first-answer')
  const secondAnswerButton = document.querySelector('.first-answer')
  const thirdAnswerButton = document.querySelector('.first-answer')
  const fourthAnswerButton = document.querySelector('.first-answer')
  firstAnswerButton.textContent = answers[0];
  secondAnswerButton.textContent = answers[1];
  thirdAnswerButton.textContent = answers[2];
  fourthAnswerButton.textContent = answers[3];
}

function checkAnswer() {

}

function formatTime(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);

  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;

  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

let timerStatus = true;
let timerInterval; // Объявляем переменную для хранения интервала

function startTimer() {
  const flipCardElement = document.querySelector('.flip-card');
  flipCardElement.classList.add('flip-card-timer'); // Показываем таймер
  const TIME_LIMIT = 60;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.querySelector(".flip-card-back-number").textContent = formatTime(timeLeft);

    // Проверяем условия остановки таймера
    if (timeLeft <= 0 || !timerStatus) {
      clearInterval(timerInterval); // Останавливаем интервал
      if (timeLeft <= 0) {
        // Действия, выполняемые при истечении времени (60 секунд)
        // Например, можно добавить здесь код для отображения сообщения об окончании времени.
        console.log('Время истекло!');
      }
    }
  }, 1000);
}

startTimer();

// MODAL WINDOW CONTROL
// Toggle modal window
function toggleModalWindow(status = 'open') {
  const modalWindow = document.querySelector('.modal-wrapper');

  if(status === 'open') {
    modalWindow.style.display = 'flex';
  } else {
    modalWindow.style.display = 'none';
  }
}

// PLAYER FUNCTIONS
// Create new player or use existing
async function createPlayer() {
  toggleModalWindow('open');
  const submittedName = await getNewPlayerNameFromForm();
  // if (!isPlayerExist(submittedName)) {
  //   await setNewPlayer(submittedName);
  // }
  if (submittedName === 'Kachi' || submittedName === 'Slava') {
    console.log('Hi again, Developer!!!!')
  }
  toggleModalWindow('close');
  return submittedName;
}

// Get a player name from form
async function getNewPlayerNameFromForm(){
  const playerNameForm = document.querySelector('.modal-window-start-game');

  const submittedName = await new Promise((resolve) => {
    playerNameForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const playerNameFormData = new FormData(playerNameForm);
      const playerNameValue = playerNameFormData.get('player-name');
      resolve(playerNameValue);
    })
  })

  return submittedName;
}

// Check if player name exist in the database
async function isPlayerExist(playerName) {
  const allPlayers = await fetchAllPlayers();
  const playerNames = allPlayers.map((player) => player.name);

  return !!(playerNames.includes(playerName));
}

// API FETCH FUNCTIONS
async function fetchData(requestString) {
  return await fetch(requestString)
    .then((data) => data)
    .catch(error => console.log(error));
}
async function fetchPlayerInfo(playerName) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}

async function fetchAllPlayers(playerName) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}

async function fetchQuestionAndAnswers(topic, difficulty) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}

async function postNewPlayer(playerName) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}