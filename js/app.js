/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"
const btnSound = new Audio("../assets/audio/button-click.wav")
const orcaSound = new Audio("../assets/audio/freeWilly.mp3")

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
console.log(currentIndex)
console.log(storyEls[currentIndex].choiceOneResults)
})

  // btnSound.play(), init(), currentIndex = 0


// console.log(buttonElOne)
// console.log(buttonElTwo)
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

  // buttonElOne.hidden = false
  // buttonElTwo.hidden = false
}

function render(){
  
  buttonElOne.textContent = storyEls[currentIndex].choiceOne
  buttonElOne.id = storyEls[currentIndex].choiceOneResults
  
  buttonElTwo.textContent = storyEls[currentIndex].choiceTwo

  buttonElTwo.id = storyEls[currentIndex].choiceTwoResults
  
  messageEl.innerHTML = storyEls[currentIndex].scriptText

  imageEl.setAttribute('src', storyEls[currentIndex].image)
  btnSound.play()
}


function handleClick(evt) {
  currentIndex = evt.target.id
  console.log(evt.target)
  if (!storyEls[currentIndex].choiceOneResults){
    // buttonElOne.style.visibility = hidden
    // buttonElTwo.style.visibility = hidden
    buttonElOne.style.display = 'none'
    buttonElTwo.style.display = 'none'
    // buttonContainer.style.display = 'none'
    // buttonContainer.removeChild(buttonElOne)
    // buttonContainer.removeChild(buttonElTwo)
    console.log(currentIndex)
    console.log(storyEls[currentIndex].choiceOneResults)
    console.log('game over!')
  }
  render()
}
