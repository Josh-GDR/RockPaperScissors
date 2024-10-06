let computerWinCount = 0;
let playerWinCount = 0;
const maxRounds = 5;

/*
* 
*/
function getPlayerTurn(turn) {
    return +prompt(`Turno #${turn}\nIngrese una de las siguientes opciones:\n1. Piedra\n2. Papel\n3. Tijera`);    
}

const main = (val) => {
    if (val < maxRounds) 
    {
        do {
            playerAns = getPlayerTurn(val + 1);
        } while (playerAns < 1 || playerAns > 3)
        console.log(val);
        main(val + 1);
    }
}

main(0);