# Project-rock-paper-scissors
 The goal of this project is to emulate the classic kid's game rock paper scissors using JavaScript and HTML that is playable from the browser's console.
 Pseudo Code
 1. Write a function called computerPlay that returns either rock, paper, or scissors randomly. This will serve as the computer opponent.
    1.1 Use Math.floor(Math.random()*10) to generate an integer from 0-9.
    1.2 Use an if else statement that tests if the generated integer is in range of 0-3, 4-6, or 7-9 and assign rock, paper, or scissors respectively.
    1.3 Assign string return values based on the result of the previous if else statement.

 2. Write a function called playRound that serves as one round of the game and takes in two parameters (the playerSelection and the computerSelection) and returns 
    a string that declares the winner. Make sure the playerSelection parameter is case-insensitive.
    2.1 Write one if statement that tests if playerSelection and computerSelection is equal and return "It was a tie! " + playerSelection " is equal to " +
    computerSelection
    2.2 Write an if else statements that test if the playerSelection is equal to paper and if computerSelection is equal to rock. If true, then return "Player
        won! Paper beats rock". If false, then the else statement will test if computerSelection is equal to scissors and return "Computer won! Scissors beat
        paper".
    2.3 Repeat step 2.2 with the appropriate terms i.e. testing rock instead of paper.

 3. Write a function called game that will call the playRound function five times that keeps score and will declare the winner and loser at the end of the five 
    rounds.
    3.1 Create a for loop that loops five times, calling the playRound function each time.
    3.2 Use the prompt function to get the user's input and store it in playerSelection and store the result of computerPlay in computerSelection.
    3.3 Create a variable called roundResult that stores the result of playRound and variables playerScore and computerScore initialized to zero.
    3.4 Create a while loop with an if statement that only exits when playRound doesn't return a tie.
    3.5 Create a ternary operator with the condition being if roundResult is equal to the player winning i.e. if (roundResult.substr(0,6) === "Player"). If true, 
        increment variable playerScore by one. If false, increment variable computerScore by one.
    3.6 Write an if statement that compares the value of playerScore and computerScore and declares the winner based on the higher value.
