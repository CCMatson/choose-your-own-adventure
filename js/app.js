/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"
const btnSound = new Audio("../assets/audio/button-click.wav")

/*-------------------------------- Variables --------------------------------*/
let currentIndex = 0

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("msg")
const imageEl = document.getElementById("img")

let buttonContainer = document.querySelector(".button-container")
let buttonElOne = document.querySelector(".choice-one")
let buttonElTwo = document.querySelector(".choice-two")
let resetBtnEl = document.querySelector(".reset")

/*----------------------------- Event Listeners -----------------------------*/
buttonElOne.addEventListener("click", handleClick)
buttonElTwo.addEventListener("click", handleClick)
resetBtnEl.addEventListener("click", () => {
  init()
  btnSound.play()
})

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  currentIndex = 0
  
  buttonElOne.textContent = (storyEls[currentIndex].choiceOne)
  buttonElTwo.textContent = (storyEls[currentIndex].choiceTwo)

  messageEl.textContent = storyEls[currentIndex].scriptText
  imageEl.setAttribute('src', storyEls[currentIndex].image)

  buttonElOne.id = 1
  buttonElTwo.id = 2

  buttonElOne.style.display = 'inline'
  buttonElTwo.style.display = 'inline'
}

function render(){
  buttonElOne.textContent = storyEls[currentIndex].choiceOne
  buttonElOne.id = storyEls[currentIndex].choiceOneResults
  buttonElOne.classList.add('animate__animated' , 'animated__bounce')
  
  buttonElTwo.textContent = storyEls[currentIndex].choiceTwo
  buttonElTwo.id = storyEls[currentIndex].choiceTwoResults
  buttonElTwo.classList.add('animate__animated' , 'animated__bounce')
  
  messageEl.innerHTML = storyEls[currentIndex].scriptText

  imageEl.setAttribute('src', storyEls[currentIndex].image)

  btnSound.play()
}


function handleClick(evt) {
  currentIndex = evt.target.id

  if (!storyEls[currentIndex].choiceOneResults){
    buttonElOne.style.display = 'none'
    buttonElTwo.style.display = 'none'
  }
  render()
}
