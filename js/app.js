/*-------------------------------- Constants --------------------------------*/
// import { story } from "../data/story.js"
/*-------------------------------- Variables --------------------------------*/
// let score = 20
let buttonContainer = document.querySelector("button-container")
let buttonElOne = document.getElementById("choice-one")
let buttonElTwo = document.getElementById("choice-two")


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById("msg")


/*----------------------------- Event Listeners -----------------------------*/
// buttonEl.addEventListener("click", displayMessage) 
buttonElOne.addEventListener("click", handleClick)

buttonElTwo.addEventListener("click", handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
console.log('initialize is called')
  render()
}

function render(){
  //link decision making buttons , 
  //script
  //clear inner html of each container
  // displayMessage()
  console.log('render is called')
  //shows the state of the game, in "card-container"
}

function handleClick(evt) {
 displayMessage()
}

function displayMessage(){
  messageEl.innerHTML = "surprise"
}

// function assignButtons(){

// }

//what calls quizGame
// quizGame()

// function quizGame(){
//   console.log('quiz game is called')