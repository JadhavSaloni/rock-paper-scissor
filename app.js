let userScore = 0;
let comScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");
//computer choice
const genComChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game Draw ,play again "
    msg.style.backgroundColor = "#051845"
}
 
const showWinner = (userWin,userChoice,comChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        comScore++;
        comScorePara.innerText = userScore;
        msg.innerText = `You Lost !${comChoice} beats your ${userChoice} `;
         msg.style.backgroundColor = "red";
    }
}

//comparing all choice
const palyGame = (userChoice) =>{
    const comChoice = genComChoice();

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice ==="paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = comChoice === "scissor" ? false : true;
        }else{
           userWin =  comChoice ==="rock"? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
};

//user choice
options.forEach((option) =>{
    option.addEventListener("click", () =>{
        const userChoice = option.getAttribute("id");
        palyGame(userChoice);
    });
});
