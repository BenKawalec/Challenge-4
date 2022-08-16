let startBtn = document.querySelector('#startBtn')
let timeEl = document.querySelector('#seconds')

startBtn.addEventListener('click', startGame)

// When start button pressed 
function startGame() {
  timer()
}

let timeLeft = 10
timeEl.textContent = `Time: ${timeLeft}`

function timer() {
  function time(){ 
    timeLeft--;
    timeEl.textContent = `Time: ${timeLeft}`
  }
  timeInterval = setInterval(time, 1000)
}