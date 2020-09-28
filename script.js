function computerPlay () {
    //randomly returns 'Rock', 'Paper', or 'Scissors'
    let rps = Math.floor((Math.random() * 3) + 1);
    return rps === 1 ? 'rock' : rps === 2 ? 'paper' : 'scissors'
}

function play (playerSelection, computerSelection) {
    //plays a single round of rock paper scissors
    //returns a strings that declares the winner of the round like:
        //"You Lose! Paper beats Rock"
    //should be case insensitive
    switch (true) {
        case playerSelection === 'rock' && computerSelection === 'scissors':
            win++;
            round++;
            return "You Win! Rock beats Scissors";
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            lose++;
            round++;
            return "You Lose! Paper beats Rock";
            break;
        case playerSelection === 'rock' && computerSelection === 'rock':
            return "A Draw! Restart the round";
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            return "You Lose! Scissors beats Paper";
            break;
        case playerSelection === 'paper' && computerSelection === 'paper':
            lose++;
            round++;
            return "A Draw! Restart the round";
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            win++;
            round++;
            return "You Win! Paper beats Rock";
            break;
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            return "A Draw! Restart the round";
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            lose++;
            round++;
            return "You Win! Scissors beats Paper";
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            win++;
            round++;
            return "You Lose! Rock beats Scissors";
            break;
    }
}

function game () {
    //use the play function inside of this to play a 5 round game that keeps score of winner/loser
    //use console.log() to display the results of each round and the winner at the end
    //use prompt() to get input from the user'
    let round = 0;
    let win = 0;
    let lose = 0;
    if (round = 5) {
        if (win > lose) {
            console.log("Congratualtions! You are the final winner.");
        } else {
            console.log("Oh no! The computer won the game...this time...");
        }
        //stop the game
    } else {
        //keep going
    }
}

