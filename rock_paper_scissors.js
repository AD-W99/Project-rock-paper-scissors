// This function chooses the computer's choice in the game.
function computerPlay () {
    let random = Math.floor(Math.random() * 10); // A number between 0-9
    if (random <= 3) {
        return "rock";
    } else if (random > 3 && random <= 6) {
        return "paper";
    } else if (random > 6 && random <= 9) {
        return "scissors";
    }
}

// This function takes in the player's and computer's choice and decides who won the round.
function playRound (playerSelection, computerSelection) {
    let playSel = playerSelection;
    let compSel = computerSelection;
    let playerWon = `Player won! ${playSel} beats ${compSel}`;
    let computerWon = `Computer won! ${compSel} beats ${playSel}`
    let tie = `It was a tie!`

    playSel.toLowerCase();

    if (playSel === compSel) {
        return tie;
    }

    if (playSel === "rock") {
        if (compSel === "scissors") {
            playerScore++;
            return playerWon;
        }
        if (compSel === "paper") {
            computerScore++;
            return computerWon;
        }
    }

    if (playSel === "paper") {
        if (compSel === "rock") {
            playerScore++;
            return playerWon;
        }
        if (compSel === "scissors") {
            computerScore++;
            return computerWon;
        }
    }

    if (playSel === "scissors") {
        if (compSel === "paper") {
            playerScore++;
            return playerWon;
        }
        if (compSel === "rock") {
            computerScore++;
            return computerWon;
        }
    }
}

// This function announces who won the whole game and gives the player the option to try again.
function endGame(p, c) {
    if (p === 5) { // Player won.
        finalScore.textContent = "Player has won the game!"
        endOfGame.insertBefore(finalScore, tryAgain);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        tryAgain.appendChild(retryButton);
    }
    if (c === 5) { // Computer won.
        finalScore.textContent = "Computer has won the game!"
        endOfGame.insertBefore(finalScore, tryAgain);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        tryAgain.appendChild(retryButton);
    }
}

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('.gameResults');
const endOfGame = document.querySelector('.endGame');
const tryAgain = document.querySelector('.tryAgain');

const oneRound = document.createElement('div');
const currentScore = document.createElement('div');
const finalScore = document.createElement('div');

const retryButton = document.createElement('button');
retryButton.textContent = "Try Again?"
retryButton.onclick = function () { // This function restarts the whole game upon click.
    playerScore = 0;
    computerScore = 0;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    tryAgain.removeChild(retryButton);
    endOfGame.removeChild(finalScore);
    container.removeChild(oneRound);
    container.removeChild(currentScore);
};

const playerRock = document.querySelector('#rock');
playerRock.addEventListener('click', () => { // This function activates when player chooses rock.
    oneRound.textContent = playRound("rock", computerPlay());
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    endGame(playerScore, computerScore);
    container.appendChild(oneRound);
    container.appendChild(currentScore);
});

const playerPaper = document.querySelector('#paper');
playerPaper.addEventListener('click', () => { // This function activates when player chooses paper.
    oneRound.textContent = playRound("paper", computerPlay());
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    endGame(playerScore, computerScore);
    container.appendChild(oneRound);
    container.appendChild(currentScore);
});

const playerScissors = document.querySelector('#scissors');
playerScissors.addEventListener('click', () => { // This function activates when player chooses scissors.
    oneRound.textContent = playRound("scissors", computerPlay());
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    endGame(playerScore, computerScore);
    container.appendChild(oneRound);
    container.appendChild(currentScore);
});