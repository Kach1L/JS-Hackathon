
// MAIN LOGIC
async function startNewGame() {
  const playerName = await setNewPlayerName();

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
// Get valid player name
async function setNewPlayerName() {
  const playerNameForm = document.querySelector('.modal-window-start-game');
  let isUserNameValid = false;
  let submittedName;

  toggleModalWindow('open');
  while (!isUserNameValid) {
    // Get name from form
    submittedName = await new Promise((resolve) => {
      playerNameForm.addEventListener('submit', function (event) {
        const playerNameValue = getNewPlayerNameFromForm(event);
        resolve(playerNameValue);
      })
    })
    // if (!isPlayerExist(submittedName)) {
    if (submittedName === 'Slava') {
      isUserNameValid = true;
    }
  }
  toggleModalWindow('close');
  return submittedName;
}

// Get a player name from form
function getNewPlayerNameFromForm(event){
  const playerNameForm = document.querySelector('.modal-window-start-game');
  event.preventDefault();
  const playerNameFormData = new FormData(playerNameForm);
  return playerNameFormData.get('player-name');
}

// Check if player name exist in the database
function isPlayerExist(playerName) {
  const allPlayers = getAllPlayers();
  const playerNames = allPlayers.map((player) => player.name);

  return !!(playerNames.includes(playerName));
}



startNewGame();
// Fetch player's data or create a new one: (check if it already exists, then ask for a new one)

// Alert a message with a rules

// After player press ok start a new round

// If it is successful move to a next step, otherwise update user score and exit the program

// If user passed all questions show success message  and update user score



// API FETCH FUNCTIONS
async function fetchData(requestString) {
  return await fetch(requestString)
    .then((data) => data)
    .catch(error => console.log(error));
}
async function getPlayerInfo(playerName) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}

async function getAllPlayers(playerName) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}

async function getQuestion(topic, difficulty) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}

async function setNewPlayer(playerName) {
  return await fetchData('Request string'); // !!!! ADD QUERY STRING!!!!!
}