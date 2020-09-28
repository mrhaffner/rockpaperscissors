function game() {
    //use the play function inside of this to play a 5 round game that keeps score of winner/loser
    //use console.log() to display the results of each round and the winner at the end
    //use prompt() to get input from the user'
    let round = 0;
    let win = 0;
    let lose = 0;
  
    if (round === 5) {
        if (win > lose) {
            console.log("Congratualtions! You are the final winner.");
        } else {
            console.log("Oh no! The computer won the game...this time...");
        }
        //stop the game
    } else {
        //keep going
        play(playerPlay(), computerPlay())
        console.log(result)
        game()
    }
}

function computerPlay() {
    //randomly returns 'Rock', 'Paper', or 'Scissors'
    let rps = Math.floor((Math.random() * 3) + 1);
    return rps === 1 ? 'rock' : rps === 2 ? 'paper' : 'scissors'
}

function playerPlay() {
    let play = prompt("Rock, Paper, or Scissors?").toLowerCase()
    if (play === 'rock' || play === 'paper' || play === 'scissor') {
        return play;
    } else {
        alert("Please enter a valid choice");
        playerPlay();
    }
}

function play(playerSelection, computerSelection) {
    //plays a single round of rock paper scissors
    //returns a strings that declares the winner of the round like:
        //"You Lose! Paper beats Rock"
    //should be case insensitive
    switch (true) {
        case playerSelection === 'rock' && computerSelection === 'scissors':
            return result = "You Win! Rock beats Scissors";
        case playerSelection === 'rock' && computerSelection === 'paper':
            return result = "You Lose! Paper beats Rock";
        case playerSelection === 'rock' && computerSelection === 'rock':
            return result = "A Draw! Restart the round";
        case playerSelection === 'paper' && computerSelection === 'scissors':
            return "You Lose! Scissors beats Paper";
        case playerSelection === 'paper' && computerSelection === 'paper':
            return "A Draw! Restart the round";
        case playerSelection === 'paper' && computerSelection === 'rock':
            return "You Win! Paper beats Rock";
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            return "A Draw! Restart the round";
        case playerSelection === 'scissors' && computerSelection === 'paper':
            return "You Win! Scissors beats Paper";
        case playerSelection === 'scissors' && computerSelection === 'rock':
            return "You Lose! Rock beats Scissors";
    }
}

