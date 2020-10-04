let round = 0;
let win = 0;
let lose = 0;

function game(x) {
    play(x, computerPlay());

    results.textContent = `${result}`
    if (win === 5) {
        //alert("Congratualtions! You are the final winner.");
        results.textContent = `${result} Congratualtions! You are the final winner.`
        round = 0;
        win = 0;
        lose = 0;
    } else if (lose === 5) {
        //alert("Oh no! The computer won the game...this time...");
        results.textContent = `${result} Oh no! The computer won the game...this time...`
        round = 0;
        win = 0;
        lose = 0;
    } 
    playerWins.textContent = `Wins: ${win}`
    playerLosses.textContent = `Losses: ${lose}`
    computerWins.textContent = `Wins: ${lose}`
    computerLosses.textContent = `Losses: ${win}`
    roundNum.textContent = `Current Round: ${round + 1}`
}

function computerPlay() {
    let rps = Math.floor((Math.random() * 3) + 1);
    return rps === 1 ? 'rock' : rps === 2 ? 'paper' : 'scissors'
}

function play(playerSelection, computerSelection) {
    switch (true) {
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    })
})