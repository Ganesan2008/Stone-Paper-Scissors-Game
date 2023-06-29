// Stone, paper, scissor Game create

let UserName=confirm("Are you ready to play a game");

if (UserName===true){
    UserInput=prompt("Are you select Stone,Papar,Scissor:");

if ((UserInput===null)|| (UserInput.length===0)){
    UserInput=alert("Thankyou for playing this game!"); 
    console.log(UserInput="thankyou for playing")
}
else{
    UserInput=UserInput.toLowerCase();
}
}
if (UserName==false){
User=alert("Thankyou for playing this game !");
console.log(UserInput="Thankyou")
}

let computer=(Math.floor((Math.random()*3)+1));
computer=(computer===1)?"stone": (computer===2)?"paper":"scissor";
console.log(computer)

if(((UserInput==="paper")||(UserInput==="stone")||(UserInput==="scissor"))&&((computer==="stone")|| (computer==="paper")|| (computer=="scissor"))){
    
let Winner = (UserInput===computer)?"Tie":((UserInput==="paper")&&(computer==="stone"))?"Player Wins !":((UserInput=="stone")&&(computer=="paper"))?"computer Wins !":((UserInput=="paper")&&(computer=="scissor"))?"computer Wins !":((UserInput==="scissor")&&(computer==="paper"))?"Player Wins !":((UserInput==="stone")&&(computer==="scissor"))?"computer Wins !":"player Wins !";

console.log(Winner);
let playAgain;

Winner=confirm(`${Winner} \n Are you play again`);
Winner?playAgain:"Thank you";

playAgain= confirm("PlayAgain");
playAgain? location.reload() : alert("Thank you")

}
else{
    alert("invalid input");
}
