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
    if(playerSelection.toLowerCase() == computerSelection){
        return 'It is a draw!'
    }else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
        return 'You lose! Paper beats rock!'
    }else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        return 'You lose! Scissors beats paper!'
    }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
        return 'You lose! Rock beats scissors!'
    }else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        return 'You win! Rock beats scissors!'
    }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        return 'You win! Scissors beats paper!'
    }else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        return 'You win! Paper beats rock!'
    }else{
        return 'There was an error that occured'
    }
}

let game = () => {
    let computerScore = 0;
    let userScore = 0;
    for(i = 0; i < 5; i++){
        userInput = prompt('What do you choose?');
        result = playRound(userInput, getComputerChoice())
        if(result.includes('error')){
            console.log("An error occured. Restart.")
            break;
        }
        if(result.charAt(4) == 'w'){
            userScore++;
        }else if(result.charAt(4) == 'l'){
            computerScore++;
        }
        console.log(result)
        console.log(`The result is ${userScore} for you, and ${computerScore} for the computer.`)
    }
}

game()