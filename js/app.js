/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"

/*-------------------------------- Variables --------------------------------*/
// let score = 20
let buttonContainer = document.querySelector("button-container")


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("msg")

let buttonElOne = document.getElementById("choice-one")
let buttonElTwo = document.getElementById("choice-two")

/*----------------------------- Event Listeners -----------------------------*/
// buttonEl.addEventListener("click", displayMessage) 
buttonElOne.addEventListener("click", handleClick)

buttonElTwo.addEventListener("click", handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  buttonElOne.textContent = (storyEls[0].choiceOne)
  buttonElTwo.textContent = (storyEls[0].choiceTwo)
  //currentChoice = 0 (variable), update as you click buttons
// messageEl.textContent = (storyEls[currentChoice].scriptText)
//starting score ? Esp if changing later
//board set up
  // render()
  //initialize a variable
}

function render(){
  console.log('render is called')
  //will hold functions that call other functions

  //link decision making buttons , 
  //script
  //clear inner html of each container
  // displayMessage()
  //shows the state of the game, in "card-container"
}

function handleClick(evt) {
let buttonChoice = evt.target.id
  console.log(evt.target.id)
  // console.log(typeof evt.path[0])
  handleMessage(buttonChoice)
  render()
  //specific and location based, event listener
  // event as parameter, take adventage of location
  //
}

function handleMessage(buttonChoice){
  if (buttonChoice === "choice-one"){
    messageEl.innerHTML = storyEls[1].scriptText
  }
  else if (buttonChoice === "choice-two"){
    messageEl.innerHTML = storyEls[2].scriptText
  }
console.log("buttonClick variable works" , buttonChoice)
  // if choiceOne ...
  // if choiceTwo....
  // messageEl.innerHTML =  storyEls[0].scriptText
}

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