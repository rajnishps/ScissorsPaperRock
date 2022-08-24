const playerScore = document.querySelector("#player-score");
const theResult = document.querySelector("#result");
const personOption = document.querySelectorAll(".rpsButton");

const getComputerChoice = (playerChoice) => {
  const compOptions = ["Rock", "Paper", "Scissors"];
  let computerChoice = compOptions[Math.floor(Math.random() * 3)];
  compare(playerChoice ,computerChoice);
};

const playerChoice = (computerChoice) => {
  personOption.forEach((option) => {
    option.addEventListener("click", () => {
      getComputerChoice(option.value)
    });
  });
};

const compare = (playerChoice,computerChoice) => {
  console.log(playerChoice,computerChoice)
};

playerChoice()