document.addEventListener('DOMContentLoaded',function(){
const choices =document.querySelectorAll(".choice");
const msg =document.getElementById("msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
 let userScore=0;
 let compScore=0;
const genCompChoice = ()=>
{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = () =>{
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#081b31";
};
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
};

const playGame = (userChoice) => {
  // generate computer choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
      // Draw Game
      drawGame();
  } else {
      let userWin = false;
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
      showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
});
