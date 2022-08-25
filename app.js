const theResult = document.querySelector("#result");
const compScore = document.querySelector("#comp-score");
const playerScore = document.querySelector("#player-score");
const compHand = document.querySelector("#hand");
const personOption = document.querySelectorAll(".rpsButton");
const game = () => {
  let pScore = 0;
  let cScore = 0;
  const getComputerChoice = (playerChoice) => {
    const compOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice = compOptions[Math.floor(Math.random() * 3)];
    compare(playerChoice, computerChoice);
  };

  const playerChoice = (computerChoice) => {
    personOption.forEach((option) => {
      option.addEventListener("click", () => {
        getComputerChoice(option.value);
      });
    });
  };

  const compare = (playerChoice, computerChoice) => {
    compHand.textContent = `Computer's Choice ${computerChoice}`;
    if (playerChoice === "Rock") {
      if (computerChoice === "Paper") {
        cScore += 1;
        theResult.textContent = "Computer Wins";
        compScore.textContent = `Computer's Score: ${cScore}`;
      } else if (computerChoice === "Scissors") {
        pScore += 1;
        theResult.textContent = "Player Wins";
        playerScore.textContent = `Player's Score: ${cScore}`;
      } else {
        theResult.textContent = "Draw";
      }
    } else if (playerChoice === "Paper") {
      if (computerChoice === "Scissors") {
        cScore += 1;
        theResult.textContent = "Computer Wins";
        compScore.textContent = `Computer's Score: ${cScore}`;
      } else if (computerChoice === "Rock") {
        pScore += 1;
        theResult.textContent = "Player Wins";
        playerScore.textContent = `Player's Score: ${cScore}`;
      } else {
        theResult.textContent = "Draw";
      }
    } else if (playerChoice === "Scissors") {
      if (computerChoice === "Rock") {
        cScore += 1;
        theResult.textContent = "Computer Wins";
        compScore.textContent = `Computer's Score: ${cScore}`;
      } else if (computerChoice === "Paper") {
        pScore += 1;
        theResult.textContent = "Player Wins";
        playerScore.textContent = `Player's Score: ${cScore}`;
      } else {
        theResult.textContent = "Draw";
      }
    }
  };
  playerChoice();
};
game();
