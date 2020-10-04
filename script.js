let round = 0;
let win = 0;
let lose = 0;

function game(x) {
    if (round === 5) {
        if (win > lose) {
            //round -= 1
            alert("Congratualtions! You are the final winner.");
        } else {
            //round -= 1
            alert("Oh no! The computer won the game...this time...");
        }
        round = 0;
        win = 0;
        lose = 0;
    } else {
        play(x, computerPlay());
        console.log(result);

    }
    playerWins.textContent = `Wins: ${win}`
    playerLosses.textContent = `Losses: ${lose}`
    computerWins.textContent = `Wins: ${lose}`
    computerLosses.textContent = `Losses: ${win}`
    roundNum.textContent = `Current Round: ${round + 1}`
    results.textContent = `${result}`
}

function computerPlay() {
    let rps = Math.floor((Math.random() * 3) + 1);
    return rps === 1 ? 'rock' : rps === 2 ? 'paper' : 'scissors'
}



function play(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === null:
            return (round = 5, result = "Good bye!");
        case playerSelection === 'rock' && computerSelection === 'scissors':
            return (round++, win++, 
                result = `You Win! Rock beats Scissors.`);
        case playerSelection === 'rock' && computerSelection === 'paper':
            return (round++, lose++,                 
                result = `You Lose! Paper beats Rock.`);
        case playerSelection === 'rock' && computerSelection === 'rock':
            return result = "A Draw! Restart the round";
        case playerSelection === 'paper' && computerSelection === 'scissors':
            return (round++, lose++, 
                result = `You Lose! Scissors beats Paper.`);
        case playerSelection === 'paper' && computerSelection === 'paper':
            return result = "A Draw! Restart the round";
        case playerSelection === 'paper' && computerSelection === 'rock':
            return (round++, win++, 
                result = `You Win! Paper beats Rock.`);
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            return result = "A Draw! Restart the round";
        case playerSelection === 'scissors' && computerSelection === 'paper':
            return (round++, win++, 
                result = `You Win! Scissors beats Paper.`);
        case playerSelection === 'scissors' && computerSelection === 'rock':
            return (round++, lose++, 
                result = `You Lose! Rock beats Scissors.`);
    }
}

//adding UI functionality
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    })
})