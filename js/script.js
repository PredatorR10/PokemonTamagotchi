//Game Objects assigned to variables
let introScreen = $("#intro");
let gameScreen = $("#game");
let gameOverScreen = $("#gameOver");

let endMessage = $("#endMessage");

//Game variables
let age = $("#pokeAge");
let name = $("#pokeName");
let level = $("#pokeLevel");

let currentAge = 1;
let currentLevel = 1;

let currentHunger = 100;
let currentEnergy = 100;
let currentBoredom = 100;

let gameInProg = false;
let restarting = false;

let image = $("#pokemonIMG");
let evolutions = [
    "https://thumbs.gfycat.com/HoarseSnoopyBadger-size_restricted.gif",
    "https://c.tenor.com/-mfw8KZJdcEAAAAM/charmeleon-pokemon.gif",
    "https://64.media.tumblr.com/tumblr_ma4fsg8aDZ1rfjowdo1_500.gif"
];
//Screens start hidden, fade in intro on page load
introScreen.fadeIn();

//Functions to switch screens
function gameStart() {
    introScreen.fadeOut();
    setTimeout(() => { gameScreen.fadeIn(); }, 1500);
    setTimeout(() => { playGame(); }, 2000);
};

function replay() {
    gameOverScreen.fadeOut();
    setTimeout(() => { gameScreen.fadeIn(); }, 1500);
    setTimeout(() => { playGame(); }, 2000);
};

function gameEnd() {
    gameScreen.fadeOut();
    setTimeout(() => { gameOverScreen.fadeIn(); }, 1500);
    //resets stats and name field when the game ends
    $("#nameField").val("");
    currentHunger = 100;
    currentEnergy = 100;
    currentBoredom = 100;
    currentLevel = 1;
    setTimeout(() => { image.attr("src", evolutions[0]); }, 1500);
    currentAge = 1;
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
        level.text(`Level: ${currentLevel}`);
        age.text(`Age: ${currentAge}`);
        $("#hungerBar").val(currentHunger);
        $("#energyBar").val(currentEnergy);
        $("#boredomBar").val(currentBoredom);
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
        currentLevel++;
        level.text(`Level: ${currentLevel}`);
        if(currentLevel >= 16 && currentLevel < 36) {
            image.attr("src", evolutions[1]);
        } else if(currentLevel >= 36) {
            image.attr("src", evolutions[2]);
        }

    };
});

//Game over buttons
$("#playAgain").on("click", function() {
    //resets status on replay
    level.text(`Level: ${currentLevel}`);
    age.text(`Age: ${currentAge}`);
    $("#hungerBar").val(currentHunger);
    $("#energyBar").val(currentEnergy);
    $("#boredomBar").val(currentBoredom);
    if(!restarting) {
        replay();
        restarting = true;
    };
});

$("#return").on("click", function() {
    gameReset();
});

//function containing main gameplay mechanics
function playGame() {
    gameInProg = true;
    restarting = false;
    //intervals to increase age and decrease pokemon stats over time
    let ageUp = setInterval(() => {
        if(gameInProg && currentAge <= 40) {
            currentAge++;
            age.text(`Age: ${currentAge}`);
        } else {
            gameInProg = false;
            if(currentAge > 40) {
                endMessage.text("Your pokemon died of old age.");
            };
            clearInterval(ageUp);
            gameEnd();
        };
    }, 1000);

    let boredomDown = setInterval(() => {
        if(gameInProg && currentBoredom > 0) {
            currentBoredom--;
            $("#boredomBar").val(currentBoredom);
        } else {
            gameInProg = false;
            if(currentBoredom === 0) {
                endMessage.text("Your pokemon wandered off due to extreme bordom.");
            };
            clearInterval(boredomDown);
        };
    }, 200);

    let hungerDown = setInterval(() => {
        if(gameInProg && currentHunger > 0) {
            currentHunger--;
            $("#hungerBar").val(currentHunger);
        } else {
            gameInProg = false;
            if(currentHunger === 0) {
                endMessage.text("Your pokemon died of starvation.");
            };
            clearInterval(hungerDown);
        };
    }, 200);

    let energyDown = setInterval(() => {
        if(gameInProg && currentEnergy > 0) {
            currentEnergy--;
            $("#energyBar").val(currentEnergy);
        } else {
            gameInProg = false;
            if(currentEnergy === 0) {
                endMessage.text("Your pokemon died to lack of sleep.");
            };
            clearInterval(energyDown);
        };
    }, 200);
};