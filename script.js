// Declare and assign the global variables to store the movements options for computer and player and to count the number
//of rounds won, lost or tied
let options = ["rock", "paper", "scissors"];
let win = 0,
  lose = 0,
  tie = 0;

// Create a function for the computer play which gives a random movement
function computerPlay(arr) {
  let computerOption = Math.floor(Math.random() * arr.length);
  return arr[computerOption];
}

// Create a function to get the user movement
function playerMovement() {
  let playerOption = prompt(
    "Write your movement 'rock', 'paper' or 'scissors'"
  );
  playerOption = playerOption.toLocaleLowerCase();

  // compares if the player option is included on the options
  if (!options.includes(playerOption)) {
    throw new Error("Please write a valid movement");
  }
  return playerOption;
}

//Create single round play
function singleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tie += 1;
    return "It's a tie";
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "scissors") {
          win += 1;
          return "You win! Rock beats Scissors";
        } else {
          lose += 1;
          return "You lose! Paper beats Rock";
        }
        break;
      case "paper":
        if (computerSelection === "rock") {
          win += 1;
          return "You win! Paper beats Rock";
        } else {
          lose += 1;
          return "You lose! Scissors beats Paper";
        }
        break;
      case "scissors":
        if (computerSelection === "paper") {
          win += 1;
          return "You win! Scissors beats Paper";
        } else {
          lose += 1;
          return "You lose! Rock beats Scissors";
        }
        break;
    }
  }
}
//Game, create  a function that plays the single round five times and determines the winer
function game() {
  for (let rounds = 0; rounds < 5; rounds++) {
    console.log(singleRound(playerMovement(), computerPlay(options)));
  }
  if (win > lose && win > tie) {
    alert("You are the winner");
  } else if (lose > win && lose > tie) {
    alert("You lost");
  } else {
    alert("It's a tie");
  }
}

game();
