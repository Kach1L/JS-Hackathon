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