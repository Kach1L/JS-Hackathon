function moveCurrentRoundMark(currentRound) {
  if (currentRound === 1) {
    return;
  }

  const currentRoundElement = document.querySelector(`.progress-step-${currentRound}`);
  const previousRoundElement = document.querySelector(`.progress-step-${currentRound - 1}`);

  currentRoundElement.classList.add('step-active');
  previousRoundElement.classList.remove('step-active');
}