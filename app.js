// Keep track of the scores;
let playerScore = 0;
let computerScore = 0;

// Makes sure the player chose a option
let chosen = false;

// Get the buttons
const buttons = document.querySelectorAll('input');

function computerChoice() {
    let choice = Math.floor(Math.random() * 3);
    // Return the computer's decision
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

function disableChoices() {
    buttons.forEach((btn) => {
        btn.disabled = true;
    })
}

function playRound(playerSelection, computerSelection) {
    let results = '';
    // Decide the winner
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore += 1;
            results = ('You win, ' + playerSelection + ' beats ' + computerSelection + '!'
            + "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if (playerScore == 5) {
                disableChoices();
                results = ('Congratulations you won against the CPU!'
                + "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            }
        } else if (playerSelection == computerSelection) {
            results = ('Tie, both players chose ' + playerSelection + '!'
            + "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
        } else {
            computerScore += 1;
            results = ('You lose, ' + computerSelection + ' beats ' + playerSelection + '!'
            + "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            if (computerScore == 5) {
                disableChoices();
                results = ('Sorry it looks like the CPU beat you to it!'
                + "<br><br> Player Score: " + playerScore + "<br>Computer Score: " + computerScore);
            }
        }
    document.getElementById('results').innerHTML = results;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(playRound(button.value, computerChoice()));
    })
})