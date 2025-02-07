document.addEventListener('DOMContentLoaded', function () {
    const choices = document.querySelectorAll(".choice");
    const msg = document.getElementById("msg");
    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#comp-score");
    const refreshBtn = document.getElementById("refresh-btn"); // Select the refresh button

    let userScore = 0;
    let compScore = 0;
    const maxScore = 5;  // Set the score limit

    const genCompChoice = () => {
        const options = ["Rock", "Paper", "Scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    const drawGame = () => {
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    };

    const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }

        // Check if the game has reached the score limit
        if (userScore === maxScore || compScore === maxScore) {
            endGame();
        }
    };

    const endGame = () => {
        if (userScore === maxScore) {
            msg.innerText = "Congratulations! You won the game!";
            msg.style.backgroundColor = "blue";
        } else {
            msg.innerText = "Game Over! The computer won the game.";
            msg.style.backgroundColor = "darkred";
        }

        // Disable choices after game ends
        choices.forEach(choice => choice.removeEventListener("click", handleChoice));
    };

    const handleChoice = (event) => {
        const userChoice = event.target.getAttribute("id");
        playGame(userChoice);
    };

    const playGame = (userChoice) => {
        const compChoice = genCompChoice();
        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = false;
            if (userChoice === "Rock" && compChoice === "Scissors") userWin = true;
            else if (userChoice === "Paper" && compChoice === "Rock") userWin = true;
            else if (userChoice === "Scissors" && compChoice === "Paper") userWin = true;
            showWinner(userWin, userChoice, compChoice);
        }
    };

    // Add event listeners to choices
    choices.forEach(choice => choice.addEventListener("click", handleChoice));

    // Refresh button functionality
    refreshBtn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        userScorePara.innerText = userScore;
        compScorePara.innerText = compScore;
        msg.innerText = "Game reset. Start playing!";
        msg.style.backgroundColor = "#081b31";

        // Re-enable choices after reset
        choices.forEach(choice => choice.addEventListener("click", handleChoice));
    });
});
