//Welcome the user
// Generate random computer input
function computerPlay() {
    const shapes = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()* shapes.length);
    return(shapes[random]);
}
const computerSelection = computerPlay().toUpperCase();

// Ask for user input
function playerPlay() {
    const playerAnswer = prompt("ROCK, PAPER OR SCISSORS?").toUpperCase();
    return playerAnswer;
}

// loops 5 times
function game(){
    for (i=1; i<=5; i++) {
        playerSelection = playerPlay();
        console.log(playround(playerSelection, computerSelection));
    }
}

// Single round of the game
function playround(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a draw!";
    } else if 
             ((playerSelection == "PAPER" && computerSelection == "ROCK") ||
              (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
              (playerSelection == "SCISSORS" && computerSelection == "PAPER"))
    {
        pCounter =+ 1;
        return "You win!!";
    } else if
            ((playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
             (playerSelection == "ROCK" && computerSelection == "PAPER") ||
             (playerSelection == "SCISSORS" && computerSelection == "ROCK"))
    {
        cCounter =+ 1;
        return "You lose!";
    } else { 
        return "Hey! That's invalid!";
    }
}

