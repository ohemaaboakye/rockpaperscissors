let userScore = 0;
let computerScore = 0;
let userchoice = null;


//fetch users ui buttons
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

//computers selection buttons from ui
let crock = document.querySelector('#crock');
let cpaper = document.querySelector('#cpaper');
let cscissors = document.querySelector('#cscissors');



function getComputerChoice(){
    /* will randomly return 1 of 3 choices */

    let choice = Math.floor(Math.random()* 3);   /*math.random*2 to randomize numbers 0-2, 3 not included
                                    math.floor makes it so that it rounds down to nearest whole number */


    
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    

    if (choice == 0) {
        return rock;
        crock.style.backgroundColor = 'lightblue';
    } else if (choice == 1) {
        return paper;
        cpaper.style.backgroundColor = 'lightblue';
    } else if (choice == 2) {
        return scissors;
        cscissors.style.backgroundColor = 'lightblue';
    }

    setTimeout(function() {
                crock.style.backgroundColor = ''; //reverts button to original color after 3 secs
                cscissors.style.backgroundColor = '';
                cpaper.style.backgroundColor = '';
            }, 2000); //3000ms = 3 seconds
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

//fetch users pick on click
function userPick(event){
    if (event.target === rock){
        //userchoice = 'rock';
        event.target.style.backgroundColor = 'lightblue';
    } else if (event.target === paper){
        //userchoice = 'paper';
        event.target.style.backgroundColor = 'lightblue';
    } else if (event.target === scissors){
        //userchoice = 'scissors';
        event.target.style.backgroundColor = 'lightblue';
    }

    setTimeout(function() {
        event.target.style.backgroundColor = ''; //reverts button to original color after 3 secs
    }, 2000); //3000ms = 3 seconds

    userchoice = event.target.id;
    getuserchoice();
    
}



rock.addEventListener('click', userPick);
paper.addEventListener('click', userPick);
scissors.addEventListener('click', userPick);

/*
function getuserchoice(){
    console.log(userchoice)
    return userchoice;
}*/

let getuserchoice = () => {
    return userchoice;
}

console.log(getuserchoice());

let compchoice = getComputerChoice();


if (userScore > computerScore) {
    console.log("Congrats! You won the game!");
} else if (computerScore > userScore) {
    console.log("Sorry. better luck next time :( ");
} else {
    console.log("IT'S A TIE!!!");
}


do {
    compchoice = getComputerChoice();
    playRound(compchoice, getuserchoice);
} while ((userScore < 5) && (computerScore < 5)); 







for (let i = 1; i <= 5; i++){


    //gets computer choice + highlights it
    compchoice = getComputerChoice();
    let compcolor = (compchoice) => {
        switch (compchoice) {
            case 'rock':
                crock.style.backgroundColor = 'lightblue';
            case 'paper':
                cpaper.style.backgroundColor = 'lightblue';
            case 'scissors':
                cscissors.style.backgroundColor = 'lightblue';

            
            setTimeout(function() {
                crock.style.backgroundColor = ''; //reverts button to original color after 3 secs
                cscissors.style.backgroundColor = '';
                cpaper.style.backgroundColor = '';
            }, 2000); //3000ms = 3 seconds
        }
    }
    compcolor();

    //now time to get users choice
    let humanchoice = getuserchoice();
    rock.addEventListener('click', userPick);
    paper.addEventListener('click', userPick);
    scissors.addEventListener('click', userPick);


    
    playRound(compchoice, getuserchoice);
    
}  */




//playRound(compchoice, humanchoice);
