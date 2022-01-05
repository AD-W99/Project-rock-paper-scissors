function computerPlay () {
    let random = Math.floor(Math.random() * 10);
    if (random <= 3) {
        return "rock";
    } else if (random > 3 && random <= 6) {
        return "paper";
    } else if (random > 6 && random <= 9) {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    let playSel = playerSelection;
    let compSel = computerSelection;
    let playerWon = `Player won! ${playSel} beats ${compSel}`;
    let computerWon = `Computer won! ${compSel} beats ${playSel}`
    let tie = `It was a tie! ${playSel} is equal to ${compSel}.`

    playSel.toLowerCase();

    if (playSel === compSel) {
        return tie;
    }

    if (playSel === "rock" && compSel === "scissors") {
        return playerWon;
    } else if (playSel === "rock" && compSel === "paper") {
        return computerWon;
    }

    if (playSel === "paper" && compSel === "rock") {
        return playerWon;
    } else if (playSel === "paper" && compSel === "scissors") {
        return computerWon;
    }

    if (playSel === "scissors" && compSel === "paper") {
        return playerWon;
    } else if (playSel === "scissors" && compSel === "rock") {
        return computerWon;
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let roundResult;

        do {
            let playerSelection = prompt("Rock, paper, or scissors?");
            let computerSelection = computerPlay();

            roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);

            if (roundResult.slice(0, 6) === "Player") {
                playerScore++;
            } else if (roundResult.slice(0, 8) === "Computer") {
                computerScore++;
            }
        } while (roundResult.slice(0, 13) === "It was a tie!");
    }
    if (playerScore > computerScore)
        console.log("Player has won the game!");
    else
        console.log("Computer has won the game!");
}