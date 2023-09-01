// MAIN LOGIC
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
// GAME LOGIC
// Start round
function startNewRound(number) {
  const roundTopics = {
    1: ['html', 'easy'],
    2: ['html', 'medium'],
    3: ['html', 'hard'],
    4: ['css', 'easy'],
    5: ['css', 'medium'],
    6: ['css', 'hard'],
    7: ['js', 'easy'],
    8: ['js', 'medium'],
    9: ['js', 'hard'],
  }

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
function isPlayerExist(playerName) {
  const allPlayers = getAllPlayers();
  const playerNames = allPlayers.map((player) => player.name);

  return !!(playerNames.includes(playerName));
}

startNewGame();

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