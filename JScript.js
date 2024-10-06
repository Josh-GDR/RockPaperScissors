let computerWinCount = 0;
let playerWinCount = 0;
let playerChoice = 0;
const maxRounds = 5;

const playerInfo = document.createElement("p");
const computerInfo = document.createElement("p");
const result = document.createElement("p");

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
    button.addEventListener(("click"), () => {
        playerChoice = +button.id

        playMatch(playerChoice, getComputerInput());

    })
})

function initResultDiv() {
    const content = document.querySelector("#results");

    const headerInfo = document.createElement("h2");
    headerInfo.textContent = "Matches won by: ";
    headerInfo.style.cssText = "margin-bottom: 5px"
    content.appendChild(headerInfo);

    playerInfo.style.cssText = "margin-bottom: 0px"
    playerInfo.textContent = getPlaterInfo();
    content.appendChild(playerInfo);

    computerInfo.style.cssText = "margin-bottom: 0px"
    computerInfo.textContent = getComputerInfo();
    content.appendChild(computerInfo);

    result.textContent = "-- waiting to start game --";
    content.appendChild(result);
}
initResultDiv();

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

function getPlaterInfo() {
    return `Player: ${playerWinCount}`
}

function getComputerInfo() {
    return `Computer: ${computerWinCount}`;
}
