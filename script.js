// query selectors for the divs
const gameResult = document.querySelector('.results');
const weaponsFired = document.querySelector('.round-weapons');
const scoreBoard = document.querySelector('.score-board');
const finalVerdict = document.querySelector('.final-verdict');
const weapons = document.querySelectorAll('.weapon');

// add event listeners for each choice
weapons.forEach((weapon, index) => {
    weapon.addEventListener('click', playerPlay);
});

// generate random computer answers
const computerPlay = function() {
    const randomAnswer = Math.floor(Math.random()* 3);
    if (randomAnswer === 1) {
        computerAnswer = "rock"
    } else if (randomAnswer === 2){
        computerAnswer = "paper"
    } else {
        computerAnswer = "scissors"
    }
    return computerAnswer;
}

// get value of clicked div and fire up a single play
function playerPlay(e) {
    let playerSelection = e.target.getAttribute('data-name');
    let computerSelection = computerPlay();
    playround(playerSelection, computerSelection);
}

let playerScore = 0;
let computerScore = 0;

// plays 1 round of the game and display result
function playround(playerSelection, computerSelection) {
    weaponsFired.textContent = `You chose ${playerSelection} while computer chose ${computerSelection}`;

    if (computerSelection == playerSelection) {
        gameResult.textContent = "Oh! It's a draw.";
        gameResult.style.cssText = 'color: blue';
    } else if 
             ((playerSelection == "paper" && computerSelection == "rock") ||
              (playerSelection == "rock" && computerSelection == "scissors") ||
              (playerSelection == "scissors" && computerSelection == "paper"))
    {
        gameResult.textContent = "Nice! one point for you!";
        gameResult.style.cssText = 'color: green';
        playerScore ++;
    } else if
            ((playerSelection == "paper" && computerSelection == "scissors") ||
             (playerSelection == "rock" && computerSelection == "paper") ||
             (playerSelection == "scissors" && computerSelection == "rock"))
    {
        gameResult.textContent = "Sorry, this round is mine!";
        gameResult.style.cssText = 'color: red';
        computerScore ++;
    } else { 
        gameResult.textContent = "Sorry, that's invalid!";
        gameResult.style.cssText = 'color: red';
    }
    playVerdict(playerScore, computerScore);
}


// Play game 5 consecutive times and print the overall verdict
function playVerdict(){ 
    scoreBoard.textContent = `YOUR SCORE: ${playerScore} MIMING SCORE: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        cleanUp();
        if (playerScore === 5) {
            finalVerdict.textContent = "HOORAY! YOU WIN THE GAME!";
            finalVerdict.style.cssText = 'color:yellow;';            
        } else if (computerScore === 5) {
            finalVerdict.textContent = "SORRY, YOU LOSE THE GAME!";
            finalVerdict.style.cssText = 'color:red;';
        }
        alert('Play again?');
        location.reload();
    }
}

function cleanUp() {
    gameResult.remove();
    weaponsFired.remove();
}