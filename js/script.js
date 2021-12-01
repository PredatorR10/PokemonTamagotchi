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

