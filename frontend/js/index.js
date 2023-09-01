// MAIN LOGIC
// Get a player name

// Fetch player's data or create a new one: (check if it already exists, then ask for a new one)

// Alert a message with a rules

// After player press ok start a new round

// If it is successful move to a next step, otherwise update user score and exit the program

// If user passed all questions show success message  and update user score



// API functions
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