function getComputerChoice() {
    const randomNum =  Math.floor((Math.random() * 3)) + 1;
    switch (randomNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    return prompt("Enter one of the following values (“rock”, “paper” or “scissors”): ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // Rules for a round
        // 1. Paper beats Rock
        // 2. Rock beats scissors
        // 3. Scissors beats Paper
        // if a tie occurs, retry the round until different results

        let winner;
        let loser;
        let state;

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        while (humanChoice == computerChoice) {
            alert("A tie occured. Press 'OK' to try this round again.")
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
        }

        if (humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper"
        ) {
            humanScore++;
            winner = humanChoice;
            loser = computerChoice;
            state = "win";
        }
        else  {
            computerScore++; 
            winner = computerChoice;
            loser = humanChoice;
            state = "lose";
        }

        console.log(`You ${state}! ${winner.at(0).toUpperCase() + winner.substring(1)} beats ${loser.at(0).toUpperCase() + loser.substring(1)}`);
    }

    alert("Welcome to a game of 'Rock, Paper, Scissors'! This game would have 5 rounds. Click 'OK' to continue!");

    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        playRound(getHumanChoice(), getComputerChoice());     
    }

    let winner, loser, winScore, loseScore;
    if (humanScore > computerScore) {
        winner = "You"; 
        loser = "Computer"; 
        winScore = humanScore;
        loseScore = computerScore;
    } else {
        winner = "Computer"; 
        loser = "You"; 
        winScore = computerScore;
        loseScore = humanScore;
    }
    
    console.log(`At the end of the five rounds: \nWinner: ${winner} (${winScore} points)\nLoser: ${loser} (${loseScore} points)`);
}

playGame();