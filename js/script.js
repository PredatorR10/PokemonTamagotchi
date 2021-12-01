//Game Objects assigned to variables
let introScreen = $("#intro");
let gameScreen = $("#game");
let gameOverScreen = $("#gameOver");

//Game variables
let age = $("#pokeAge");
let name = $("#pokeName");
let level = $("#pokeLevel");

let currentAge = 1;
let currentLevel = 1;

let currentHunger = 50;
let currentEnergy = 50;
let currentBoredom = 50;

let gameInProg = true;

//Screens start hidden, fade in intro on page load
introScreen.fadeIn();

//Functions to switch screens
function gameStart() {
    introScreen.fadeOut();
    setTimeout(() => { gameScreen.fadeIn(); }, 1500);
};

function gameEnd() {
    gameScreen.fadeOut();
    setTimeout(() => { gameOverScreen.fadeIn(); }, 1500);
};

function gameReset() {
    gameOverScreen.fadeOut();
    setTimeout(() => { introScreen.fadeIn(); }, 1500);
};

//Start game button
$("#startButton").on("click", function() {
    $("#nameWarning").text("");     //Clear warning message if present
    if($("#nameField").val() !== "") {      //Checks for an input that isnt blank
        //initialize default game status and open main game page
        name.text($("#nameField").val());
        level.text(currentLevel);
        age.text(currentAge);
        gameStart();
    } else {
        $("#nameWarning").append("Please Enter A Valid Name!");     //Display warning if input is blank
    };
});

//Game buttons
$("#eatButton").on("click", function() {
    if(currentHunger !== 100 && gameInProg) { //If game is still running add 10 pts to hunger when clicked
        currentHunger += 10;
        if(currentHunger > 100) {currentHunger = 100}; //Hunger can not exceede 100
        $("#hungerBar").val(currentHunger);
    };
});

$("#sleepButton").on("click", function() {
    if(currentEnergy !== 100 && gameInProg) { //If game is still running add 10 pts to energy when clicked
        currentEnergy += 10;
        if(currentEnergy > 100) {currentEnergy = 100}; //Energy can not exceede 100
        $("#energyBar").val(currentEnergy);
    };
});

$("#battleButton").on("click", function() {
    if(currentBoredom !== 100 && gameInProg) { //If game is still running add 10 pts to boredom when clicked
        currentBoredom += 10;
        if(currentBoredom > 100) {currentBoredom = 100}; //Boredom can not exceede 100
        $("#boredomBar").val(currentBoredom);
    };
});