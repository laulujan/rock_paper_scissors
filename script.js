// Declare and assign the global variables to store the movements options for computer and player and to count the number
//of rounds won, lost or tied
let options = ["rock", "paper", "scissors"];
let win = 0,
  lose = 0,
  tie = 0;


//This function adds the no display class to elements that we dont want to be shown on the dom
function addClassName (id, cName){
  const elem = document.getElementById(id);
  elem.classList.add(cName)
  console.log(elem);
}

//this function removes a class name is used to show elements on the dom
 function removeClassName(clas){
   const elem = document.getElementsByClassName(clas);
   elem[0].classList.remove(clas);
 }

 //this function is called when the user hits play button and calls the functions for display and hide 
 function play(){
   removeClassName('no-display');
   addClassName('img', 'no-display');
   addClassName('play-btn', 'no-display')
   removeClassName('hidden');
   removeClassName('hidden');
   removeClassName('hidden');
 }

//get player movement
function playerMove(e){
  const move = e.target.value;
  return move
}

//get computer movement
function computerMove(arr) {
  let computerOption = Math.floor(Math.random() * arr.length);
  return arr[computerOption];
}

//Single play round gets player and computer movements and determines who is the round's winer

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tie += 1;
    showScore('#ties-score', tie);
    showScore('#legend', "It's a tie");
    return "It's a tie";
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "scissors") {
          win += 1;
          showScore('#player-counter', win);
          showScore('#legend', "You win! Rock beats Scissors");
          return "You win! Rock beats Scissors";
        } else {
          lose += 1;
          showScore('#computer-counter', lose);
          showScore('#legend', "You lose! Paper beats Rock");
          return "You lose! Paper beats Rock";
        }
        break;
      case "paper":
        if (computerSelection === "rock") {
          win += 1;
          showScore('#player-counter', win);
          showScore('#legend', "You win! Paper beats Rock");
          return "You win! Paper beats Rock";
        } else {
          lose += 1;
          showScore('#computer-counter', lose);
          showScore('#legend', "You lose! Scissors beats Paper");
          return "You lose! Scissors beats Paper";
        }
        break;
      case "scissors":
        if (computerSelection === "paper") {
          win += 1;
          showScore('#player-counter', win);
          showScore('#legend', "You win! Scissors beats Paper");
          return "You win! Scissors beats Paper";
        } else {
          lose += 1;
          showScore('#computer-counter', lose);
          showScore('#legend',  "You lose! Rock beats Scissors");
          return "You lose! Rock beats Scissors";
        }
        break;
    }
  }
}

function game() {
   singleRound(playerMove(event), computerMove(options));
   
   its_over(win, lose);

}

function its_over(player, computer) {
  if (player === 5) {
    showModal("you're the winner!!");
  }

  if (computer === 5) {
   showModal("you lose !!");
  }
}


// this function is used include the scores of the players
function showScore(id, content){
  const p = document.querySelector(id);
  p.textContent = content;
}

//displays the game results on a modal 
function showModal(text){
  const modal = document.getElementById('myModal');
  modal.style.display = "block"
  const modalText = document.getElementById('modal-text');
  modalText.textContent = text;
}
  
  