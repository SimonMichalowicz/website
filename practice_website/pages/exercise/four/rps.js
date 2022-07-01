//Set player and computer score to zero
let playerScore = 0;
let computerScore = 0;
let winner = ''
//One player and one computer
//Player selects one of the three options
//Computer to randomly select one of the three options
function computerPlay(){
    let option = ['rock', 'paper', 'scissors']
    let choice = option[Math.floor(Math.random()*option.length)]
    return choice
}

//Compare results to determine winner & adjust score
function playRound() {
    let result = ""
    let playerSelection = window.prompt("Please choose rock, paper or scissors")
        playerSelection = playerSelection.toLowerCase()
    
    let computerSelection = computerPlay()
        console.log(playerSelection)
        console.log(computerSelection)
    
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')) { 
        playerScore += 1;
        return result = "You win! " + playerSelection + " beats " + computerSelection + "!";
    }

    else if(playerSelection == computerSelection) {
        return result = "The computer also picked " + computerSelection + ". It's a tie!";
    }

    else{
        computerScore += 1;
        return result = "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }

}

function game() {

    for (let i = 0; i < 5; i++){
        console.log(playRound())
    }
    
    if(playerScore > computerScore){
        winner = "You win with " + playerScore + " points!" 
    }
    
    else if(playerScore === computerScore){
        winner = "It's a tie at " + playerScore + " points!"
    }
    
    else {
        winner = "You lose! The computer scored " + computerScore + " points!"
    }

    console.log(winner)

}

game()
