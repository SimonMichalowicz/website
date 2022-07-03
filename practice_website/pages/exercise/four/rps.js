let playerScore = 0;
let computerScore = 0;
let winner = ''
//Set scores and winner text

function computerPlay(){
    let option = ['rock', 'paper', 'scissors']
    let choice = option[Math.floor(Math.random()*option.length)]
    return choice
}//function to determine computer selection

function playRound() {
    let result = ""

    let playerSelection = window.prompt("Please choose rock, paper or scissors")    //player input
        playerSelection = playerSelection.toLowerCase() //set input text to lowercase for comparison below
    
    let computerSelection = computerPlay()

    console.log(playerSelection)
    console.log(computerSelection)
    
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) { 
        playerScore += 1;
        return result = "You win! " + playerSelection + " beats " + computerSelection + "!";
    }   //player win

    else if(playerSelection == computerSelection) {
        return result = "The computer also picked " + computerSelection + ". It's a tie!";
    }   //tie game

    else{
        computerScore += 1;
        return result = "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }   //computer win

}//Function to take player selection and compare with computer selection to determine who gets a point

function game() {

    for (let i = 0; i < 5; i++){
        console.log(playRound())
    } //Play 5 rounds
    
    if (playerScore > computerScore){
        winner = "You win with " + playerScore + " points!" 
    }   //Win conditions
    
    else if (playerScore === computerScore){
        winner = "It's a tie at " + playerScore + " points!"
    }
    
    else {
        winner = "You lose! The computer scored " + computerScore + " points!"
    }

    console.log(winner)

}//Full game looping through rounds until a winner is decided and printing winner and winning score

game()
