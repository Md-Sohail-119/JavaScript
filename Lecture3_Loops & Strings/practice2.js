let gameNum = 34;

let n = prompt("Guess a number: ")

while(gameNum != n) {
    n = prompt("You guessed it wrong. Guess again : ");
}

console.log("Congratulations, You guessed it right");
