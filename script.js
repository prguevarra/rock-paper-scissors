// Welcome the user and ask to play the game.
console.log(`Hey there user! Are you ready to play the game? if so, type in %cgame()`, "color:white; background:red; style:bold;");

// Generate random computer answers.
const computerPlay = function() {
    const randomAnswer = Math.floor(Math.random()* 4);
    if (randomAnswer === 2) {
        computerAnswer = "rock"
    } else if (randomAnswer === 1 || randomAnswer === 3){
        computerAnswer = "paper"
    } else {
        computerAnswer = "scissors"
    }
    return computerAnswer;
}
let computerSelection = computerPlay();


// add event listeners for each choice
const weapons = document.querySelectorAll('.weapon');
weapons.forEach((weapon, index) => {
    weapon.addEventListener('click', playerPlay);
});

// get value of clicked div and fire up a single play
function playerPlay(e) {
    let playerSelection = e.target.getAttribute('data-name');
    playround(playerSelection, computerSelection);
}

// plays 1 round of the game and display result
function playround(playerSelection, computerSelection) {
    const container = document.querySelector('#weapons');
    const gameResult = document.createElement('div');
    gameResult.classList.add('results');
    container.appendChild(gameResult);

    if (computerSelection == playerSelection) {
        gameResult.textContent = "Oh! It's a draw";
    } else if 
             ((playerSelection == "paper" && computerSelection == "rock") ||
              (playerSelection == "rock" && computerSelection == "scissors") ||
              (playerSelection == "scissors" && computerSelection == "paper"))
    {
        gameResult.textContent = "Nice! You won!";
    } else if
            ((playerSelection == "paper" && computerSelection == "scissors") ||
             (playerSelection == "rock" && computerSelection == "paper") ||
             (playerSelection == "scissors" && computerSelection == "rock"))
    {
        gameResult.textContent = "Sorry, You lose!";
    } else { 
        gameResult.textContent = "Sorry, that's invalid!";
    }
}


// Play game 5 consecutive times and print the overall verdict
// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     let drawScore = 0;
//     let invalidScore = 0;
//     for (i=0; i<5; i++) {
//         computerSelection = computerPlay();
//         playerSelection = playerPlay();
//         playround(playerSelection, computerSelection);
//         if (playround(playerSelection, computerSelection) === "You lose!") {
//             console.log("You lose!");
//             computerScore += 1;
//         } else if (playround(playerSelection, computerSelection) === "You win!") {
//             console.log("You win!!");
//             playerScore += 1;
//         } else if (playround(playerSelection, computerSelection) === "It's a draw") {
//             console.log("It's a draw!")
//             drawScore += 1;
//         } else if (playround(playerSelection, computerSelection) === "Invalid!") {
//             console.log("Hey! That's invalid!");
//             invalidScore += 1;
//         }
//         console.log(`%cComputer answered ${computerSelection}`, "style:italic");

//     }
//         if (playerScore > computerScore) {
//             console.log("%cHOORAY! YOU WIN THE GAME!", "background:yellow; style:bold;");
//         } else if (playerScore < computerScore){
//             console.log("%cSORRY, YOU LOSE THE GAME!", "color:white; background:red; style:bold;");
//         } else {
//             console.log("%cOOH! IT'S A DRAW!", "color:white; background:blue; style:bold;");
//         }
//     console.log(`%cYou scored [${playerScore}] and computer scored [${computerScore}]
//         while [${drawScore}] game(s) is/are draw and you entered [${invalidScore}] invalid entry/entries!%c`, "background:green, style: bold;");
//     return console.log("Would you like to play again? Type in %cgame()", "color:white; background:red; style:bold;");
// }

// let playerSelection = weapon.getAttribute('data-name');