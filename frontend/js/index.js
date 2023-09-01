// EVENT LISTENERS
const playerNameForm = document.querySelector('.modal-window-start-game');
const modalWindow = document.querySelector('.modal-wrapper');


// MAIN LOGIC
async function startNewGame() {
  toggleModalWindow();
  const submittedName = await new Promise((resolve) => {
    playerNameForm.addEventListener('submit', function (event) {
      const playerNameValue = getNewPlayerName(event);
      resolve(playerNameValue);
    });
  });
  console.log(submittedName);
  toggleModalWindow('close');
}

// SERVICE FUNCTIONS
// Toggle modal window
function toggleModalWindow(status = 'open') {
  if(status === 'open') {
    modalWindow.style.display = 'flex';
  } else {
    modalWindow.style.display = 'none';
  }
}

// Get a player name
function getNewPlayerName(event){
  event.preventDefault();
  const playerNameFormData = new FormData(playerNameForm);
  return playerNameFormData.get('player-name');
}

// Check if player name exist in the database
startNewGame();
// Fetch player's data or create a new one: (check if it already exists, then ask for a new one)

// Alert a message with a rules

// After player press ok start a new round

// If it is successful move to a next step, otherwise update user score and exit the program

// If user passed all questions show success message  and update user score



// API FUNCTIONS
async function fetchData(requestString) {
  return await fetch(requestString)
    .then((data) => data)
    .catch(error => console.log(error));
}
async function getUserInfo(userName) {
  return await fetchData('Request string');
}

async function getAllUsers(userName) {
  return await fetchData('Request string');
}

async function getQuestion(topic, difficulty) {
  return await fetchData('Request string');
}