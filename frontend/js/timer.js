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
  displayTimer();
  const TIME_LIMIT = 60;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

  clearInterval(timerInterval); // Добавляем эту строку для сброса предыдущего интервала

  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;

    updateTimeOnTimer(timeLeft);
    if (timeLeft <= 0 || !timerStatus) {
      clearInterval(timerInterval); // Останавливаем интервал
      console.log('Время истекло!');
      hideTimer();
      timerStatus = false;
    }
  }, 1000);
}


function displayTimer() {
  const flipCardElement = document.querySelector('.flip-card');
  flipCardElement.classList.add('flip-card-timer'); // Показываем таймер
}

function hideTimer() {
  const flipCardElement = document.querySelector('.flip-card');
  flipCardElement.classList.remove('flip-card-timer'); // Показываем таймер
}

function updateTimeOnTimer(timeLeft) {
  document.querySelector(".flip-card-back-number").textContent = formatTime(timeLeft);
}

function stopTimer() {
  timerStatus = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  timerStatus = true;
  clearInterval(timerInterval);
  document.querySelector(".flip-card-back-number").textContent = '01:00'; // Установите начальное значение таймера, например, 1 минута
}