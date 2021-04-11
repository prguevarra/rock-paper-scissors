//Welcome the user
console.log(`Hey there user! Are you ready to play the game? if so, type in %cgame()`, "color:white; background:red; style:bold;");

// Generate random computer input
function computerPlay() {
    const shapes = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()* shapes.length);
    return(shapes[random]);
}
const computerSelection = computerPlay().toUpperCase();
// console.log(computerSelection);

// Ask for user input
function playerPlay() {
    const playerAnswer = prompt("ROCK, PAPER OR SCISSORS?").toUpperCase();
    return playerAnswer;
}

// play game 5 times
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i<=4; i++) {
        playerSelection = playerPlay();
        playround(playerSelection, computerSelection);
        if (playround(playerSelection, computerSelection) === "You lose!") {
            computerScore += 1;
            } else if (playround(playerSelection, computerSelection) === "You win!") {
                playerScore += 1;
            } else {
                computerScore += 0;
                playerScore += 0;
            }
    }
    console.log(`You scored %c${playerScore}, while computer scored %c${computerScore}.`, "style: bold;");
      if (playerScore >= 3) {
            console.log("%cYOU WIN THE GAME!", "background:yellow; style:bold;");
        } else if (playerScore < 3){
            console.log("%cYOU LOSE THE GAME!", "color:white; background:red; style:bold;");
        } else {
            console.log("%cIT'S A DRAW!", "color:white; background:blue; style:bold;");
        }
    return console.log("Ready for another game? Type in %cgame()", "color:white; background:red; style:bold;");
}

// Single round of the game
function playround(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        console.log("It's a draw!");
    } else if 
             ((playerSelection == "PAPER" && computerSelection == "ROCK") ||
              (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
              (playerSelection == "SCISSORS" && computerSelection == "PAPER"))
    {
        console.log("You win!!");
        return "You win!";
    } else if
            ((playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
             (playerSelection == "ROCK" && computerSelection == "PAPER") ||
             (playerSelection == "SCISSORS" && computerSelection == "ROCK"))
    {
        console.log("You lose!");
        return "You lose!";
    } else { 
        console.log("Hey! That's invalid!");
    }
}
