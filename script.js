
// query selectors for the divs
const container = document.querySelector('main');
const gameResult = document.querySelector('.results');
const weaponsFired = document.querySelector('.round-weapons');
const scoreBoard = document.querySelector('.score-board');
const finalVerdict = document.querySelector('.final-verdict');
const weapons = document.querySelectorAll('.weapon');
const playAgain = document.querySelectorAll('play-again');
const theDivs = document.querySelectorAll('the-divs');


// declare variables
const MAX_ROUNDS = 5
let playerScore = 0;
let computerScore = 0;

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

// plays 1 round of the game and display result
function playround(playerSelection, computerSelection) {
    weaponsFired.textContent = `You chose ${playerSelection} while miming chose ${computerSelection}`;
    showBoard();

    if (computerSelection === playerSelection) {
        gameResult.textContent = "Oh! It's a draw.";
        gameResult.style.cssText = 'color: blue';
    } else if 
             ((playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "scissors" && computerSelection === "paper"))
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

    if (playerScore === MAX_ROUNDS || computerScore === MAX_ROUNDS) {
        showOverallResult();
        if (playerScore === MAX_ROUNDS) {
            finalVerdict.textContent = "HOORAY! YOU WIN THE GAME!";
            finalVerdict.style.cssText = 'color:yellow;';      
        } else if (computerScore === MAX_ROUNDS) { 

            finalVerdict.textContent = "SORRY, YOU LOSE THE GAME!";
            finalVerdict.style.cssText = 'color:red;';
        }
        reSetGame();
    }
}

// play another round of game upon clicking "play again" button
function reSetGame() {
    playerScore = 0;
    computerScore = 0; 
    
    const resetButton = document.createElement('button');
    resetButton.classList.add('play-again-button');
    resetButton.textContent = "PLAY AGAIN";
    finalVerdict.appendChild(resetButton);

    resetButton.addEventListener('click', anotherRound);
}

function anotherRound(e) {
    clearBoard();
    
    container.classList.remove('endgame');
}

//  helper functions
function clearBoard() {
    gameResult.style.visibility = "hidden";
    weaponsFired.style.visibility = "hidden";
    finalVerdict.style.visibility = "hidden";
    scoreBoard.style.visibility = "hidden";
}

function showBoard() {
    gameResult.style.visibility = "visible";
    weaponsFired.style.visibility = "visible";
    scoreBoard.style.visibility = "visible";
}

function showOverallResult() {
    freezeImages();
    gameResult.style.visibility = "hidden";
    weaponsFired.style.visibility = "hidden";
    finalVerdict.style.visibility = "visible";
}

function freezeImages() {
    container.classList.add('endgame');    
}