// TIMER FUNCTIONS
// Timer variables
let timerStatus = true;
let timerInterval;

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function startTimer() {
  const flipCardElement = document.querySelector('.flip-card');
  flipCardElement.classList.add('flip-card-timer'); // Показываем таймер
  const TIME_LIMIT = 60;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.querySelector(".flip-card-back-number").textContent = formatTime(timeLeft);

    // Проверяем условия остановки таймера
    if (timeLeft <= 0 || !timerStatus) {
      clearInterval(timerInterval); // Останавливаем интервал
      if (timeLeft <= 0) {
        // Действия, выполняемые при истечении времени (60 секунд)
        // Например, можно добавить здесь код для отображения сообщения об окончании времени.
        console.log('Время истекло!');
      }
    }
  }, 1000);
}

function stopTimer() {
  timestatus = false;
}