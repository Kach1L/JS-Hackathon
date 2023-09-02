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