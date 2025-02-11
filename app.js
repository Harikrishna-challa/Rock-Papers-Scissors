// This event listener ensures that the script executes only after the DOM content has been fully loaded.
document.addEventListener('DOMContentLoaded',function(){
     // Selecting all elements with the class 'choice'
const choices =document.querySelectorAll(".choice");
// Selecting the element with the id 'msg'
const msg =document.getElementById("msg");
// Selecting elements for displaying user and computer scores
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
    // Initializing user and computer scores
 let userScore=0;
 let compScore=0;
 const scoreLimit = 5;  // Set the limit to 5 points
 let gameOver = false;  // Flag to stop the game when the limit is reached

 // Function to generate computer choice (Rock, Paper, or Scissors)
const genCompChoice = ()=>
{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
// Function to handle a draw game
const drawGame = () =>{
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#081b31";
};
 // Function to determine the winner and update scores
const showWinner=(userWin,userChoice,CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText= `You lost.${CompChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
if (userScore === scoreLimit || compScore === scoreLimit) {
    endGame();
}
};

// Function to end the game when score limit is reached
const endGame = () => {
    gameOver = true;
    if (userScore === scoreLimit) {
        msg.innerText = "🎉 Congratulations! You won the game!";
        msg.style.backgroundColor = "blue";
    } else {
        msg.innerText = "😞 Game Over! The computer won the game.";
        msg.style.backgroundColor = "darkred";
    }
};
const playGame = (userChoice) => {
  // generate computer choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
      // Draw Game
      drawGame();
  } else {
      let userWin = false;
        // Check winning conditions
      if (userChoice === "Rock") {
          // if user chooses rock
          if(compChoice === "Scissors"){
              userWin=true; // Rock beats Scissors
          }
      } else if (userChoice === "Paper") {
          // if user chooses Paper
          if (compChoice === "Rock"){
          userWin=true; // Paper beats Rock
          }
      } else if (userChoice === "Scissors") {
          // if user chooses 
          if(compChoice === "Paper"){
          userWin=true; // Scissors beats Paper
      }
    }
    // Display the winner and update scores
      showWinner(userWin, userChoice, compChoice);
  }
};
// Adding event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
    
    // Refresh button logic to reset the game
    refreshBtn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        gameOver = false;  // Reset the game over flag

        // Reset UI elements
        userScorePara.innerText = userScore;
        compScorePara.innerText = compScore;
        msg.innerText = "Game reset! Start playing.";
        msg.style.backgroundColor = "#081b31";
    });
});
