function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            return ('You win, ' + playerSelection + ' beats ' + computerSelection + '!');
        } else if (playerSelection == computerSelection) {
            return ('Tie, both players chose ' + playerSelection + '!');
        } else {
            return ('You lose, ' + computerSelection + ' beats ' + playerSelection + '!');
        }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper, or scissors!");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();