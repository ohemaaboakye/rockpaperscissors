userScore = 0;
computerScore = 0;


function getComputerChoice(){
    /* will randomly return 1 of 3 choices */

    let choice = Math.floor(Math.random()* 3);   /*math.random*2 to randomize numbers 0-2, 3 not included
                                    math.floor makes it so that it rounds down to nearest whole number */


    
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    

    if (choice == 0) {
        return rock;
    } else if (choice == 1) {
        return paper;
    } else if (choice == 2) {
        return scissors;
    }
}

function getUserChoice() {
    const userInput = prompt("rock, paper, or scissors?");
    let userChoice = userInput.toLowerCase();
   
    return userChoice; 
}

function playRound(computerchoice, userchoice ){

    switch (computerchoice) {

        case "rock":

            if (userchoice == "paper") {
                userScore += 1;
            } else if (userchoice == "scissors") {
                computerScore += 1;
            } else {
                userScore += 0;
                computerScore += 0;
            }

            break;

        case "paper":

            if (userchoice == "scissors") {
                userScore += 1;
            } else if (userchoice == "rock") {
                computerScore += 1;
            } else {
                userScore += 0;
                computerScore += 0;
            }

            break;

        case "scissors":

            if (userchoice == "rock") {
                userScore += 1;
            } else if (userchoice == "paper") {
                computerScore += 1;
            } else {
                userScore += 0;
                computerScore += 0;
            }

            break;
    }

    console.log('You chose %s. Your current score is: %d', userchoice, userScore);
    console.log('The computer chose %s. Its current score is: %d', computerchoice, computerScore);

}


let compchoice = getComputerChoice();
let humanchoice = getUserChoice();


for (let i = 1; i <= 5; i++){
    console.log("ROUND %d", i);
    compchoice = getComputerChoice();
    humanchoice = getUserChoice();
    playRound(compchoice, humanchoice);
    
}


if (userScore > computerScore) {
    console.log("Congrats! You won the game!");
} else if (computerScore > userScore) {
    console.log("Sorry. better luck next time :( ");
} else {
    console.log("IT'S A TIE!!!")
}


//playRound(compchoice, humanchoice);
