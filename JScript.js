let computerWinCount = 0;
let playerWinCount = 0;
const maxRounds = 5;

const result = document.createElement("p");
const playerInfo = document.createElement("p");
const computerInfo = document.createElement("p");

function getComputerInput() {
    return 1 + Math.floor(Math.random() * 100)%3;
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
    button.addEventListener(("click"), () => {
        console.log(+button.id);
        updateFields(+button.id);
    })
})

function initResultDiv() {
    const content = document.querySelector("#results");
    
    const headerInfo = document.createElement("h2");
    headerInfo.textContent = "Matches won by: ";
    headerInfo.style.cssText = "margin-bottom: 5px"
    content.appendChild(headerInfo);
    
    playerInfo.setAttribute("id", "playerInfo");
    playerInfo.style.cssText = "margin-bottom: 0px"
    playerInfo.textContent = getPlayerInfo();
    content.appendChild(playerInfo);
    
    computerInfo.setAttribute("id", "computerInfo");
    computerInfo.style.cssText = "margin-bottom: 0px"
    computerInfo.textContent = getComputerInfo();
    content.appendChild(computerInfo);
    
    result.setAttribute("id", "resultText");
    result.textContent = "-- waiting to start game --";
    content.appendChild(result);
}
initResultDiv();

function playMatch(playerTurn, computerTurn) {
    console.log(playerTurn + " - " + computerTurn);
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

function getPlayerInfo() {
    return `Player: ${playerWinCount}`
}

function getComputerInfo() {
    return `Computer: ${computerWinCount}`;
}

function updateFields(playerChoice) {
    result.textContent = playMatch(playerChoice, getComputerInput());
    computerInfo.textContent = getComputerInfo();
    playerInfo.textContent = getPlayerInfo();

    if (computerWinCount >= maxRounds) {
        alert("The computer has won, you have been defeated");
        restartFields();
    }

    if (playerWinCount >= maxRounds) {
        alert("You have won, the computer has been defeated");
        restartFields();
    }
}

function restartFields() {
    playerWinCount = 0;
    computerWinCount = 0;
    playerInfo.textContent = getPlayerInfo();
    computerInfo.textContent = getComputerInfo();
    result.textContent = "-- waiting to start game --";
    
}