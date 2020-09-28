let round = 0;
let win = 0;
let lose = 0;

function game() {
    if (round === 5) {
        if (win > lose) {
            console.log("Congratualtions! You are the final winner.");
        } else {
            console.log("Oh no! The computer won the game...this time...");
        }
        round = 0;
        win = 0;
        lose = 0;
    } else {
        play(playerPlay(), computerPlay())
        console.log(result)
        game()
    }
}

function computerPlay() {
    let rps = Math.floor((Math.random() * 3) + 1);
    return rps === 1 ? 'rock' : rps === 2 ? 'paper' : 'scissors'
}

function playerPlay() {
    let play = prompt("Rock, Paper, or Scissors?");
    if (play === 'rock' || play === 'paper' || play === 'scissors') {
        return play.toLowerCase();
    } else if (play === null) {
        return play;
    } else {
        alert("Please enter a valid choice");
        playerPlay();
    }
}

function play(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === null:
            return (round = 5, result = "Good bye!");
        case playerSelection === 'rock' && computerSelection === 'scissors':
            return (round++, win++, 
                result = `You Win! Rock beats Scissors.\nRound ${round} results:\nWins: ${win}, Losses: ${lose}`);
        case playerSelection === 'rock' && computerSelection === 'paper':
            return (round++, lose++,                 
                result = `You Lose! Paper beats Rock.\nRound ${round} results:\nWins: ${win}, Losses: ${lose}`);
        case playerSelection === 'rock' && computerSelection === 'rock':
            return result = "A Draw! Restart the round";
        case playerSelection === 'paper' && computerSelection === 'scissors':
            return (round++, lose++, 
                result = `You Lose! Scissors beats Paper.\nRound ${round} results:\nWins: ${win}, Losses: ${lose}`);
        case playerSelection === 'paper' && computerSelection === 'paper':
            return result = "A Draw! Restart the round";
        case playerSelection === 'paper' && computerSelection === 'rock':
            return (round++, win++, 
                result = `You Win! Paper beats Rock.\nRound ${round} results:\nWins: ${win}, Losses: ${lose}`);
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            return result = "A Draw! Restart the round";
        case playerSelection === 'scissors' && computerSelection === 'paper':
            return (round++, win++, 
                result = `You Win! Scissors beats Paper.\nRound ${round} results:\nWins: ${win}, Losses: ${lose}`);
        case playerSelection === 'scissors' && computerSelection === 'rock':
            return (round++, lose++, 
                result = `You Lose! Rock beats Scissors.\nRound ${round} results:\nWins: ${win}, Losses: ${lose}`);
    }
}

//add a condition for if the player cancels out!!!