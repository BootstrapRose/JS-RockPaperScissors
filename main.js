var userChoice = prompt("Do you choose rock, paper, or scissors?");

var computerChoice = Math.random();
console.log(computerChoice);

if (0 < computerChoice < 0.33) {
    val computerPlays = "rock";
}
else if (0.34 < computerChoice < 0.66) {
    computerPlays = "paper";
}
else {
    computerPlays = "scissors";
}

console.log(computerPlays);
