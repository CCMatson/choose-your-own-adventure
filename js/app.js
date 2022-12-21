/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"
const waveSound = new Audio("../assets/audio/waves.wav")

/*-------------------------------- Variables --------------------------------*/
let currentIndex = 0

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("msg")

const imageEl = document.getElementById("img")

let buttonContainer = document.querySelector(".button-container")

let buttonElOne = document.querySelector(".choice-one")
let buttonElTwo = document.querySelector(".choice-two")

/*----------------------------- Event Listeners -----------------------------*/

buttonElOne.addEventListener("click", handleClick)
buttonElTwo.addEventListener("click", handleClick)

// console.log(buttonElOne)
// console.log(buttonElTwo)
/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  buttonElOne.textContent = (storyEls[0].choiceOne)
  buttonElTwo.textContent = (storyEls[0].choiceTwo)

  messageEl.textContent = storyEls[0].scriptText
  imageEl.setAttribute('src', storyEls[0].image)
}

function render(){
  messageEl.innerHTML = storyEls[currentIndex].scriptText

  imageEl.setAttribute('src', storyEls[currentIndex].image)

  buttonElOne.textContent = storyEls[currentIndex].choiceOne
  buttonElOne.id = storyEls[currentIndex].choiceOneResults

  buttonElTwo.textContent = storyEls[currentIndex].choiceTwo
  buttonElTwo.id = storyEls[currentIndex].choiceTwoResults
    // waveSound.play()
}

function handleClick(evt) {
  // waveSound.play()
  currentIndex = evt.target.id
  if (!storyEls[currentIndex].choiceOneResults){
    // buttonContainer.style.display = 'none'
    buttonContainer.removeChild(buttonElOne)
    buttonContainer.removeChild(buttonElTwo)
    console.log('game over!')
  }
  render()

}
