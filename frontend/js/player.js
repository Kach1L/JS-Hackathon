// PLAYER FUNCTIONS
// Create new player or use existing
async function createPlayer() {
  togglePlayerNameInputWindow('open');
  const submittedName = await getNewPlayerNameFromForm();
  // if (!isPlayerExist(submittedName)) {
  //   await setNewPlayer(submittedName);
  // }
  // if (submittedName === 'Kachi' || submittedName === 'Slava') {
  //   console.log('Hi again, Developer!!!!')
  // }
  togglePlayerNameInputWindow('close');
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

// Player input window control
function togglePlayerNameInputWindow(status = 'open') {
  const modalWindow = document.querySelector('.modal-wrapper');

  if(status === 'open') {
    modalWindow.style.display = 'flex';
  } else {
    modalWindow.style.display = 'none';
  }
}