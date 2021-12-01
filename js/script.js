//Game Objects assigned to variables
let introScreen = $("#intro");
let gameScreen = $("#game");
let gameOverScreen = $("#gameOver");

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