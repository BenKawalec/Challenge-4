let startBtn = document.querySelector('#startBtn')
let timeEl = document.querySelector('#timer')
let questionHide = document.querySelector('#question-container')
let startButton = document.querySelector('#startBtn')
let startPage = document.querySelector('#start-page')
let nextBtn = document.querySelector('#next-btn')
let questionElement = document.querySelector('#question')
let question = document.querySelector('#question')
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
  selectQuestion()
  selectAnswer()

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

// Array of questions 
const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '44', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '44', correct: false },
      { text: '10', correct: false }
    ]
  }
]


function selectQuestion() {
  question.textContent = questions[index].question;
}

function selectAnswer() {
  answerOne = document.querySelector('#b1')
  answerTwo = document.querySelector('#b2')
  answerThree = document.querySelector('#b3')
  answerFour = document.querySelector('#b4')

  answerOne.textContent = questions[index].answers[0].text
  answerTwo.textContent = questions[index].answers[1].text
  answerThree.textContent = questions[index].answers[2].text
  answerFour.textContent = questions[index].answers[3].text
}

let index = Math.floor(Math.random() * 10);

