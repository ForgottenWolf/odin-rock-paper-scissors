function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1)
    updateComputerChoice(computerChoice);
    return computerChoice; // pick a number between 3 and 1 (inclusively)
}

function playRound(playerSelection, computerSelection) {
    const outcome = document.querySelector(".outcome");
    const score = document.querySelector(".score");
    if (playerSelection === 1) { //rock
        if (computerSelection === 1) {
            outcome.textContent = "You Tie! Both chose Rock";
        } else if (computerSelection === 2) {
            outcome.textContent = "You loose! Paper beats Rock";
            computerScore += 1;
        } else {
            outcome.textContent = "You win. Rock beats Scissors";
            userScore += 1;
        }
    }
    if (playerSelection === 2) { //paper
        if (computerSelection === 2) {
            outcome.textContent = "You Tie! Both chose paper";
        } else if (computerSelection === 3) {
            outcome.textContent = "You loose! Scissors beats Paper";
            computerScore += 1;
        } else {
            outcome.textContent = "You win. Paper beats Rock";
            userScore += 1;
        }
    }
    if (playerSelection === 3) { //scissors
        if (computerSelection === 3) {
            outcome.textContent = "You Tie! Both chose Scissors";
        } else if (computerSelection === 1) {
            outcome.textContent = "You loose! Rock beats Scissors";
            computerScore += 1;
        } else {
            outcome.textContent = "You win. Scissors beats Paper"
            userScore += 1;
        }
    }
    score.textContent = userScore + "-" + computerScore;
}

function getUserInput(userInput) {
    userInput = userInput.target.className;
    updateUserChoice(userInput)
    let userNum;
    if (userInput === "rock") {
        userNum = 1;
    } else if (userInput === "paper") {
        userNum = 2;
    } else if (userInput === "scissors") {
        userNum = 3;
    }
    playRound(userNum, getComputerChoice())
}

function updateUserChoice(userInput) {
    const userChoice = document.querySelector(".userChoice");
    userChoice.textContent = "You choose: " + userInput;
}

function updateComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        computerChoice = "rock"
    } else if (computerChoice === 2) {
        computerChoice = "paper"
    } else if (computerChoice === 3) {
        computerChoice = "scissors"
    }
    const computerChoice2 = document.querySelector(".computerChoice");
    computerChoice2.textContent = "Computer choose: " + computerChoice;
}

const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => button.addEventListener("click", getUserInput));
let userScore = 0;
let computerScore = 0;