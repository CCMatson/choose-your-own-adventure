/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"

/*-------------------------------- Variables --------------------------------*/
let currentIndex = 0

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("msg")

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
}

function render(){
  messageEl.innerHTML = storyEls[currentIndex].scriptText

  buttonElOne.textContent = storyEls[currentIndex].choiceOne
  buttonElOne.id = storyEls[currentIndex].choiceOneResults

  buttonElTwo.textContent = storyEls[currentIndex].choiceTwo
  buttonElTwo.id = storyEls[currentIndex].choiceTwoResults

  console.log('render is called')
  console.log('current index works!', currentIndex)
}

function handleClick(evt) {
  currentIndex = evt.target.id
  if (!storyEls[currentIndex].choiceOneResults){
    buttonContainer.style.display = 'none'
    // buttonContainer.removeChild(buttonElOne)
    // buttonContainer.removeChild(buttonElTwo
    console.log('game over!')
  }
  render()

}
