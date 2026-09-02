let gammeNum = 25;

let userGuess = prompt("Guess the game number : ");
   
while (userGuess != gammeNum) { 
    userGuess = prompt("Wrong guess! Try again : ");
}

alert("Congratulations! You guessed the number.");
console.log("User guessed the correct number: " , gammeNum);