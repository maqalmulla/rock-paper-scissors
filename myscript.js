let getComputerChoice = () => {
    num = Math.floor(Math.random() * 3)
    switch(num){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'There was an error!';
    }
}

let playRound = (playerSelection, computerSelection) => {
    let result = document.querySelector('.results');
    let playerScore = document.querySelector('.player_score').innerHTML;
    playerScore = parseInt(playerScore);
    let computerScore = document.querySelector('.computer_score').innerHTML;
    computerScore = parseInt(computerScore);

    if(playerSelection.toLowerCase() == computerSelection){
        result.innerHTML = 'It is a draw!' 
    }else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
        result.innerHTML = 'You lose! Paper beats rock!'
        computerScore++;
        document.querySelector('.computer_score').innerHTML = computerScore;
    }else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        result.innerHTML = 'You lose! Scissors beats paper!'
        computerScore++;
        document.querySelector('.computer_score').innerHTML = computerScore;
    }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
        result.innerHTML = 'You lose! Rock beats scissors!'
        computerScore++;
        document.querySelector('.computer_score').innerHTML = computerScore;
    }else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        result.innerHTML = 'You win! Rock beats scissors!'
        playerScore++;
        document.querySelector('.player_score').innerHTML = playerScore;
    }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        result.innerHTML = 'You win! Scissors beats paper!'
        playerScore++;
        document.querySelector('.player_score').innerHTML = playerScore;
    }else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        result.innerHTML = 'You win! Paper beats rock!' 
        playerScore++;
        document.querySelector('.player_score').innerHTML = playerScore;
    }else{
        result.innerHTML = 'There was an error that occured'
    }
}

//game()

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});