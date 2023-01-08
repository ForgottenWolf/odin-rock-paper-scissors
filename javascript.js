function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1); // pick a number between 3 and 1 (inclusively)
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 1) { //rock
        if (computerSelection === 1) {
            return console.log("You Tie! Both chose Rock");
        } else if (computerSelection === 2) {
            return console.log("You loose! Paper beats Rock");
        } else {
            return console.log("You win. Rock beats Scissors");
        }
    }
    if (playerSelection === 2) { //paper
        if (computerSelection === 2) {
            return console.log("You Tie! Both chose paper");
        } else if (computerSelection === 3) {
            return console.log("You loose! Scissors beats Paper");
        } else {
            return console.log("You win. Paper beats Rock");
        }
    }
    if (playerSelection === 3) { //scissors
        if (computerSelection === 3) {
            return console.log("You Tie! Both chose Scissors");
        } else if (computerSelection === 1) {
            return console.log("You loose! Rock beats Scissors");
        } else {
            return console.log("You win. Scissors beats Paper");
        }
    }
}
function getUserInput() {
    let userTextInput = "InvalidInput";
    while (userTextInput === "InvalidInput") {
        userTextInput = prompt("Type rock, paper, or scissors").toLowerCase();
        if (userTextInput === "rock") {
            return 1;
        } else if (userTextInput === "paper") {
            return 2;
        } else if (userTextInput === "scissors") {
            return 3;
        } else { userTextInput = "InvalidInput" }
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getUserInput(), getComputerChoice());
    }
}