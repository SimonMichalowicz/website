let playerScore = 0;
let computerScore = 0;
const playerSelection = document.querySelectorAll('#rockButton, #paperButton, #scissorsButton'); //playerselection set to input
const newGame = document.querySelector('#resetButton');

function computerPlay(){
    let option = ['rock', 'paper', 'scissors']
    let choice = option[Math.floor(Math.random()*option.length)]
    return choice
}       //function to determine computer selection using randomizer to pick from option array

function gameOver(){
    document.getElementById('rockButton').disabled=true;
    document.getElementById('paperButton').disabled=true;
    document.getElementById('scissorsButton').disabled=true;
    document.getElementById('resetButton').style.visibility='visible';
}       //function to disable buttons until reset is pressed

function resetGame(){
    document.getElementById('resetButton').style.visibility='hidden';
    playerScore = 0;
    computerScore = 0;
    document.getElementById('rockButton').disabled=false;
    document.getElementById('paperButton').disabled=false;
    document.getElementById('scissorsButton').disabled=false;
}       //function to reset game by resetting score, re-enabling buttons and hiding reset button

function playRound(playerSelection) {

    let computerSelection = computerPlay();
    let result = '';
    document.getElementById('roundResult').style.visibility='visible';
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) { 
        playerScore += 1;
        result = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + "!";

        if (playerScore == 5) {
        result = "You win with " + playerScore + " points!";
        gameOver();
        }
    }       //player win

    else if(playerSelection == computerSelection) {
        result = "The computer also picked " + computerSelection + ". It's a tie!";
    }       //tie game

    else{
        computerScore += 1;
        result = "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + "!";
        
        if(computerScore == 5) {
        result = "You lose! The computer scored " + computerScore + " points!";
        gameOver();
        }
    }       //computer win

    document.getElementById('roundResult').textContent = result
    return

}   //Function to take player selection and compare with computer selection to determine who gets a point

document.getElementById('resetButton').style.visibility='hidden'; //hide reset button on page load

document.getElementById('roundResult').style.visibility='hidden';

playerSelection.forEach (button => 
    {button.addEventListener('click', () => {playRound(button.value)})}) //play round on each button press

newGame.addEventListener('click', () => {resetGame()}); //reset game button

//Three buttons on screen. 
//Score set to 0-0. 
//Player win increases left score, computer win increases right score.
//Prompt the player to make a selection. 
//Selection registers in JS and compares to computer selection. 
//Change from player typed selection to register button press instead.
//Score updates after game and waits for next player selection
//first to five ends game and prints game results and winnner.