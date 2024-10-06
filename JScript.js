let computerWinCount = 0;
let playerWinCount = 0;
const maxRounds = 5;

function getPlayerInput(turn) {
    return +prompt(`Turno #${turn}\nIngrese una de las siguientes opciones:\n1. Piedra\n2. Papel\n3. Tijera`);
}

function getComputerInput() {
    return Math.floor(Math.random() * 100)%3;
}

const main = (val) => {
    if (val < maxRounds) 
    {
        do {
            playerAns = getPlayerInput(val + 1);
        } while (playerAns < 1 || playerAns > 3)
        computerAns = getComputerInput();
        console.log(computerAns);
        main(val + 1);
    }
}

main(0);