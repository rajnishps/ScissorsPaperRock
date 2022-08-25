const theResult = document.querySelector("#result");
const compScore = document.querySelector("#comp-score");
const playerScore = document.querySelector("#player-score");
const compHand = document.querySelector("#hand");
const reset = document.querySelector("#endGameButton");
const personOption = document.querySelectorAll(".rpsButton");

const game = () => {
  //current scores
  let pScore = 0;
  let cScore = 0;

  //choices the computer has
  const cChoice = {
    Rock: "✊",
    Paper: "🤚",
    Scissors: "✌",
  };

  //makes the choices for the computer
  const getComputerChoice = (playerChoice) => {
    const compOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice =
      compOptions[Math.floor(Math.random() * compOptions.length)];
    compare(playerChoice, computerChoice);
  };

  //listens for the player choice
  const playerChoice = (computerChoice) => {
    personOption.forEach((option) => {
      option.addEventListener("click", () => {
        getComputerChoice(option.value);
      });
    });
  };

  //compares computer's choice with the player's choice
  const compare = (playerChoice, computerChoice) => {
    compHand.textContent = `Computer's Choice ${cChoice[computerChoice]}`;
    if (playerChoice === "Rock") {
      if (computerChoice === "Paper") {
        cScore += 1;
        theResult.textContent = "Computer Wins";
      } else if (computerChoice === "Scissors") {
        pScore += 1;
        theResult.textContent = "Player Wins";
      } else {
        theResult.textContent = "Draw";
      }
    } else if (playerChoice === "Paper") {
      if (computerChoice === "Scissors") {
        cScore += 1;
        theResult.textContent = "Computer Wins";
      } else if (computerChoice === "Rock") {
        pScore += 1;
        theResult.textContent = "Player Wins";
      } else {
        theResult.textContent = "Draw";
      }
    } else if (playerChoice === "Scissors") {
      if (computerChoice === "Rock") {
        cScore += 1;
        theResult.textContent = "Computer Wins";
      } else if (computerChoice === "Paper") {
        pScore += 1;
        theResult.textContent = "Player Wins";
      } else {
        theResult.textContent = "Draw";
      }
    }
    playerScore.textContent = `Player's Score: ${pScore}`;
    compScore.textContent = `Computer's Score: ${cScore}`;
  };

  //calls the function that listens for the player's choice
  playerChoice();

  //resets the game to the initial stage
  const resets = () => {
    reset.addEventListener("click", () => {
      pScore = 0;
      cScore = 0;
      compHand.textContent = `to start the game`;
      theResult.textContent = "Choose an Option";
      playerScore.textContent = `Player's Score: ${pScore}`;
      compScore.textContent = `Computer's Score: ${cScore}`;
    });
  };
  //calls the reset function
  resets();
};
//runs the whole game function
game();
