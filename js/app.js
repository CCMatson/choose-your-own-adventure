/*-------------------------------- Constants --------------------------------*/
import { storyEls } from "../data/story.js"

/*-------------------------------- Variables --------------------------------*/
// let score = 20
// let buttonContainer = document.querySelector("button-container")



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
  messageEl.textContent = storyEls[0].scriptText
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
  handleMessage(buttonChoice)
  render()
}

function handleMessage(buttonChoice){
  for (let i = 1; i < storyEls.length; i ++){
  if (buttonChoice === "choice-one"){
    messageEl.innerHTML = storyEls[i].scriptText
    buttonElOne.textContent = storyEls[i].choiceOne
    buttonElTwo.textContent = storyEls[i].choiceTwo[i]
    return
  }
  else if (buttonChoice === "choice-two"){
    messageEl.innerHTML = storyEls[i + 1].scriptText
    buttonElTwo.textContent = storyEls[i + 1].choiceTwo
    buttonElOne.textContent = storyEls[i + 1].choiceOne
    return
  }
}

console.log("buttonClick variable works" , buttonChoice)

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