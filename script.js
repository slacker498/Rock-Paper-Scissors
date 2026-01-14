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

function playRound(humanChoice, computerChoice) {
    // Rules for a round
    // 1. Paper beats Rock
    // 2. Rock beats scissors
    // 3. Scissors beats Paper

    let winner;
    let loser;
    let state;

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

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

let humanScore = 0;
let computerScore = 0;
