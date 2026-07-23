let userScore = 0;
let computerScore = 0;
let userchoice = '';
//let humanchoice = null;


//fetch users ui buttons
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

//computers selection buttons from ui
let crock = document.querySelector('#crock');
let cpaper = document.querySelector('#cpaper');
let cscissors = document.querySelector('#cscissors');


//fetch where scores will be updated
let ui_user = document.querySelector('#user_ui');
let ui_comp = document.querySelector('#comp_ui');

let final_sec = document.querySelector('.final');
let winner = document.createElement("h1");
winner.classList.add("final_statement"); //just so this can be styled in css file

let is_winner = false;

let replay = document.querySelector(".replay");
let repeat = document.createElement("button");



function getComputerChoice(){
    /* will randomly return 1 of 3 choices */

    let choice = Math.floor(Math.random()* 3);   /*math.random*2 to randomize numbers 0-2, 3 not included
                                    math.floor makes it so that it rounds down to nearest whole number */


    
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    

    if (choice == 0) {
        return rock;
       // crock.style.backgroundColor = 'lightblue';
    } else if (choice == 1) {
        return paper;
       // cpaper.style.backgroundColor = 'lightblue';
    } else if (choice == 2) {
        return scissors;
       // cscissors.style.backgroundColor = 'lightblue';
    }
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

}

//once someone reaches 5 points, they are declared the winner
//for (let i = 1; i <= 5; i++) {

document.addEventListener('click', function(event){
    
    if ((event.target.id === 'rock') || (event.target.id === 'paper') || (event.target.id === 'scissors')){
        if (event.target.id === 'rock') {
            userchoice = 'rock';
            rock.style.backgroundColor = 'lightblue'; //creates highlight effect
         } else if (event.target.id === 'paper'){
            userchoice = 'paper';
            paper.style.backgroundColor = 'lightblue'; //creates highlight effect
        } else if (event.target.id === 'scissors'){
            userchoice = 'scissors';
            scissors.style.backgroundColor = 'lightblue'; //creates highlight effect
        }
        console.log(userchoice);

        let compchoice = getComputerChoice();
        let compcolor = (choice) => {
            if (choice === 'rock'){
                crock.style.backgroundColor = 'lightblue';
                } else if (choice === 'paper'){
                cpaper.style.backgroundColor = 'lightblue';
                } else if (choice === 'scissors'){
                cscissors.style.backgroundColor = 'lightblue';
                }
            }

        compcolor(compchoice);
        //then revert computers collor
        setTimeout(function(){
            crock.style.backgroundColor = '';
            cpaper.style.backgroundColor = '';
            cscissors.style.backgroundColor = '';
        }, 1500);
        


        setTimeout(function() {
                rock.style.backgroundColor = ''; //reverts button to original color after secs passed
                scissors.style.backgroundColor = '';
                paper.style.backgroundColor = '';
            }, 1500); //3000ms = 3 seconds

        //time to play the round

        playRound(compchoice, userchoice);
        
        function reset() {
            console.log(userScore);
            console.log(computerScore);
            userScore = 0;
            computerScore = 0;
            is_winner = false;
            winner.textContent = '';
            
        }
        
        
        while ((userScore == 5 || computerScore == 5) && (is_winner === false)){

            
            
            if (userScore == 5){
               // console.log("Congrats! You won the game!");
                winner.textContent = "Congrats, user! You won! Want to play again?"
                final_sec.append(winner);
                is_winner = true;
                repeat.textContent = 'Replay';
                replay.append(repeat);

                repeat.addEventListener('click', reset);

                break;
                
             } else if (computerScore == 5){
                //console.log("Sorry. better luck next time :( ");
                winner.textContent = "The computer has won... better luck next time:( Want to try again?";
                final_sec.append(winner);
                is_winner = true;
                repeat.textContent = 'Replay';
                replay.append(repeat);
                
                repeat.addEventListener('click', reset);
                break;
                
            }

    
        

        }



        ui_user.textContent = userScore;
        ui_comp.textContent = computerScore;
    }

        


            
    });
    
  