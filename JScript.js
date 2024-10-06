let computerWinCount = 0;
let playerWinCount = 0;
const maxRounds = 5;

function getBasicInfo(turn) {
    return `Turn # ${turn}\nMatches won by:\nPlayer: ${playerWinCount}   Computer: ${computerWinCount}`;
}

function getPlayerInput(turn) {
    return +prompt(getBasicInfo(turn) + "\nChoose one of the next options (1-3):\n1. Rock\n2. Paper\n3. Scissor");
}

function getComputerInput() {
    return Math.floor(Math.random() * 100)%3;
}

function playMatch(playerTurn, computerTurn) {
    if (playerTurn == computerTurn) {
        return "It was a draw"
    }

    if (playerTurn == 3 && computerTurn == 1) {
        playerWinCount++;
        return "Player won";
    }

    if (computerTurn == 3 && playerTurn == 1) {
        computerWinCount++;
        return "Computer won";
    }

    if (playerTurn < computerTurn) {
        playerWinCount++;
        return "Player won";
    }

    if (computerTurn < playerTurn) {
        computerWinCount++;
        return "Computer won";
    }

}

const main = (val) => {
    if (val < maxRounds) 
    {
        do {
            playerAns = getPlayerInput(val + 1);
        } while (playerAns < 1 || playerAns > 3)
        computerAns = getComputerInput();
        alert(playMatch(playerAns, computerAns));
        main(val + 1);
    }

    if (val == 0) {
        alert(getBasicInfo("-- game ended --") + `   Draws: ${maxRounds - (computerWinCount + playerWinCount)}`);
    }
}

main(0);