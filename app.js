let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice img");
const msg=document.querySelector("#msg");
const userScoreBoard=document.querySelector("#user-score");
const computerScoreBoard=document.querySelector("#comp-score");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});


const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
            
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
           
        }
        else{
            userWin=compChoice==="rock"?false:true;
        
        }
        showWinner(userWin,userChoice,compChoice);
       
    }
};



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw.Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        userScoreBoard.innerText=userScore;
        msg.innerText=`You Win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        computerScoreBoard.innerText=compScore;
        msg.innerText=`You Lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}