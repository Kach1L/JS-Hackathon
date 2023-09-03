// API FETCH FUNCTIONS
async function fetchData(requestString) {
  try{
    const data =  await fetch(requestString); // !!!! ADD QUERY STRING!!!!!
    if (!data.ok) {
      throw new Error("Corrupted Data")
    } else{
      const info = await data.json();
      return info;
    }
  } catch(err){
    console.log("IN THE CATCH ", err);
  }}

async function fetchAllPlayers() {
  return await fetchData('http://127.0.0.1:8000/players/all/')
}

async function fetchQuestionAndAnswers(roundNumber) {
  return await fetchData(`http://127.0.0.1:8000/options/${roundNumber}/`)
}

function postNewPlayer(playerName) {
  const data = {
    user_name: playerName,
    score: 0,
  };

  fetch("http://localhost:8000/players/create/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

// async function fetchPlayerInfo(playerName) {
//   return await fetchData(`http://127.0.0.1:8000/players/all/`)
// }