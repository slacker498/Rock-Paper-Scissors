let humanScore = 0;
let computerScore = 0;

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
    // if a tie occurs, retry the round until different results

    let winner;
    let loser;
    let state;

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        return "A tie occured. Try again";
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

    return `You ${state}! ${winner.at(0).toUpperCase() + winner.substring(1)} beats ${loser.at(0).toUpperCase() + loser.substring(1)}; Human Score: ${humanScore}; Computer Score: ${computerScore}`;
}

const gameIsOver = function () {
    if (computerScore === 5 || humanScore === 5) {
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
        
        const para = document.createElement('p');
        para.textContent = `At the end of the five rounds: \nWinner: ${winner} (${winScore} points)\nLoser: ${loser} (${loseScore} points)
                            Reload the page to play again!
                            `;
        para.style = "border: 1px solid black; color: red;"
        results.appendChild(para);

        rockBtn.addEventListener('click', (event) => {});
        paperBtn.addEventListener('click', (event) => {});
        scissorsBtn.addEventListener('click', (event) => {});
        return true;
    }
};

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

const results = document.createElement('div');
results.classList.add('results');
const resultsTitle = document.createElement('h3');
resultsTitle.textContent = "Results";
results.appendChild(resultsTitle);
document.querySelector('body').append(results);



rockBtn.addEventListener('click', (event) => {
    if (!gameIsOver()) {
        const para = document.createElement('p');
        para.textContent = playRound('rock', getComputerChoice());
        results.appendChild(para);
    }
    
});

paperBtn.addEventListener('click', (event) => {
    if (!gameIsOver()) {
        const para = document.createElement('p');
        para.textContent = playRound('paper', getComputerChoice());
        results.appendChild(para);
    }
});

scissorsBtn.addEventListener('click', (event) => {
    if (!gameIsOver()) {
        const para = document.createElement('p');
        para.textContent = playRound('scissors', getComputerChoice());
        results.appendChild(para);
    }
});