let startBtn = document.querySelector('#startBtn')
let timeEl = document.querySelector('#timer')
let questionHide = document.querySelector('#question-container')
let startButton = document.querySelector('#startBtn')
let startPage = document.querySelector('#start-page')
let nextBtn = document.querySelector('#next-btn')
startBtn.addEventListener('click', startGame)

// When page loads it hides the question section
window.onload = (event) => {
  questionHide.classList.add('hide')
  nextBtn.classList.add('hide')
};

// When start button pressed 
function startGame() {
  timer()
  hideOnStart()
  questionHide.classList.remove('hide')
  nextBtn.classList.remove('hide')
}

// Initial Time display
let timeLeft = 10
timeEl.textContent = `Time: ${timeLeft}`
// Function to run the timer
function timer() {
  function time(){ 
    timeLeft--;
    if (timeLeft < 0) {
      return
    }
    timeEl.textContent = `Time: ${timeLeft}`
  }
  timeInterval = setInterval(time, 1000)
}

// When function called it adds a class with "hide" to the elements
function hideOnStart() {
  startPage.classList.add('hide');
  startButton.classList.add('hide')
}