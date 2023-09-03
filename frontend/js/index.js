async function startNewGame() {
  // Создание пользователя или выбор существующего
  const playerName = await createPlayer();
  displayAllPlayers();
  let currentRound = 1;
  let isPlayerWin = true;

  alert('"Who Wants to Be a Programmer?" is a thrilling game where players test their coding knowledge and ' +
    'problem-solving skills. Contestants face a series of progressively challenging coding questions, each ' +
    'offering multiple-choice answers. To win the game and claim your first offer as a programmer, players ' +
    'must answer all questions correctly, with each correct answer bringing them closer to mastering the art of coding.');

  async function playNextRound() {
    if (currentRound <= 15) {
      const isRoundSuccessful = await playNewRound(currentRound);
      if (!isRoundSuccessful) {
        isPlayerWin = false;
        alert('You loose. Refresh a page to try again.');
        // Score update
      } else {
        currentRound++;
        alert('Good job! Move on.');
        moveCurrentRoundMark(currentRound);
        playNextRound();
      }
    } else {
      alert('Amazing! You will receive your offer soon!');
      // Final score update
    }
  }

  playNextRound();
}

startNewGame();
