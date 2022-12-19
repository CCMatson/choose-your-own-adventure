/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"

/*-------------------------------- Variables --------------------------------*/
let currentIndex = 0

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("msg")

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
  //will hold functions that call other functions

  //link decision making buttons , 
  //script
  //clear inner html of each container
  // displayMessage()
  //shows the state of the game, in "card-container"
}

function handleClick(evt) {
  currentIndex = evt.target.id
  if (!storyEls[currentIndex].choiceOneResults){
    console.log('game over!')
    //ADD SOMETHING HERE TO CLEAR HTML
    // console.log(storyEls[currentIndex].choiceOneResults)
  }
  // console.log(evt.target.id)
  // console.log(currentIndex)
  // console.log(storyEls[currentIndex])
  // handleMessage(buttonChoice)
  render()
}












//if index = #, go get that from the array

// calling parts of storyEls, and 
// 
// function Octopus(){
//   // call story elements from that choice
// }



// function assignButtons(){

// }

//what calls quizGame
// quizGame()

// function quizGame(){
//   console.log('quiz game is called')