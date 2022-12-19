/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"

/*-------------------------------- Variables --------------------------------*/
// let score = 20
// let buttonContainer = document.querySelector("button-container")

let currentIndex = 0


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("msg")

let buttonElOne = document.querySelector(".choice-one")
let buttonElTwo = document.querySelector(".choice-two")

/*----------------------------- Event Listeners -----------------------------*/
// buttonEl.addEventListener("click", displayMessage) 
buttonElOne.addEventListener("click", handleClick)

buttonElTwo.addEventListener("click", handleClick)

console.log(buttonElOne)
console.log(buttonElTwo)
/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  buttonElOne.textContent = (storyEls[0].choiceOne)
  buttonElTwo.textContent = (storyEls[0].choiceTwo)
  //currentChoice = 0 (variable), update as you click buttons
  messageEl.textContent = storyEls[0].scriptText
//starting score ? Esp if changing later
//board set up
  // render()
  //initialize a variable
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
  console.log(storyEls[currentIndex].choiceOneResults)
  if (!storyEls[currentIndex].choiceOneResults){
    console.log('game over!')
  }

  console.log(evt.target.id)
  console.log(currentIndex)
  console.log(storyEls[currentIndex])
  // handleMessage(buttonChoice)
  render()
}

function handleMessage(buttonChoice){








  // if (buttonChoice === "choice-one"){
  //   messageEl.innerHTML = storyEls[i].scriptText
  //   buttonElOne.textContent = storyEls[i].choiceOne
  //   buttonElTwo.textContent = storyEls[i].choiceTwo[i]
  //   return 
  // }
  // else if (buttonChoice === "choice-two"){
  //   messageEl.innerHTML = storyEls[i + 1].scriptText
  //   buttonElTwo.textContent = storyEls[i + 1].choiceTwo
  //   //buttonElTwo.id = update to next story id
  //   buttonElOne.textContent = storyEls[i + 1].choiceOne
  //   return
  // }
  // return
}

// console.log("buttonClick variable works" , buttonChoice)















// functions needed: update currentChoice
// functions needed: pull data from sheet to displayMessage
// functions needed: update each button
// functions needed update messageELs







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