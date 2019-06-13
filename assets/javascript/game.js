
let goalScore = 0;
let playerScore = 0;
let wins = 0;
let losses = 0;
// creates object with random values for each crystal between 1 and 12
let crystalValues = {
    blueCrystal: Math.floor(Math.random() * 12) + 1,
    purpleCrystal: Math.floor(Math.random() * 12) + 1,
    redCrystal: Math.floor(Math.random() * 12) + 1,
    greenCrystal: Math.floor(Math.random() * 12) + 1,
}

// click events for each crystal that call "addCrystalValue" function to update player score
$("#blueCrystal").click(addCrystalValue);
$("#purpleCrystal").click(addCrystalValue);
$("#redCrystal").click(addCrystalValue);
$("#greenCrystal").click(addCrystalValue);

// sets "goal score" value that player must match to win game to a random number between 19 and 120
function setGoalScore(){
    goalScore = Math.floor(Math.random() * (120 - 19) + 19);
};

// display goal score
function displayGoalScore(){
    $("#randomNumber").text(goalScore);
};

// display player score
function displayPlayerScore(){
    $("#playerScore").text(playerScore);
};

// add value of the crystal that was clicked to the players total score
function addCrystalValue(event){
    console.log(event);
    playerScore = playerScore + crystalValues[event.target.id];
    displayPlayerScore();
};

// checks if the players total score is equal to the "goal score",
// if so increases win count, if "goal score" is exceeded increase lose count
function gameWin(){
    
};

function gameLose(){
    
};

// restart game when player wins or looses and resets crystal values and "goal score" value
function resetGame(){
    
};


setGoalScore();
displayGoalScore();
displayPlayerScore();
