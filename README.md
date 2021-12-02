# PokemonTamagotchi

## About this project

This project is a simple game where the user can raise and take care of their own Pokemon, specificaly a charmander, and watch it evolve as the game progresses.  The player will have to use the "feed", "sleep", and "battle" buttons to take care of the Pokemon's needs, if any of them get to low the Pokemon will die.  The game has a hard time limit based around the Pokemon's age, which they will die once they are over the age of 40.  Charmander in Pokemon lore evolves at levels 16 and 36 so an evolution and level system was added tied to the "battle" button to reference this fact.

## Why I made this

I created this to put my coding skills to the test in creating a web application using HTML, CSS, JavaScript, and jQuery.  Building something from the ground up was a fun opportunity to solidify the concepts I have learned thus far.

## User Story

As a user I would want to be greeted with a welcome screen with a choice of being able to name my own Pokemon and a start button to take me to the main game.  I would want to see UI that is clearly layed out with buttons to take care of and interact with my Pokemon.  My Pokemon should die if its needs are not met or if it reaches a certain age.  My Pokemon should also level up and evolve to proper evolution stages at their respective levels determined by Pokemon lore.  When the game ends i should be taken to a game over screen where i can either replay or be taken back the main welcom screen.

## Technologies Used

HTML  
CSS  
JavaScript  
jQuery  

Imported NES CSS framework from:  
https://nostalgic-css.github.io/NES.css/  
https://github.com/nostalgic-css/NES.css

## Design Approach

I started this project by setting up the file and folder structure and ensuring the HTML, CSS, and JS files were properly linked and working in the browser and checked to see if jQuery worked.  I then set up all my "pages" contained within divs on the main HTML file and set up the layout for each screen with CSS.  I imported the NES CSS framework for a NES feel to the game to match the Pokemon theme.  All the divs containing "pages" were set to hidden by default then faded in/out as needed for the game with jQuery.  Finaly I programed all the game mechanics with JavaScript.

## Wireframes

Welcome page:  
![image](/images/StartPage.png)  

Main game page:  
![image](/images/MainGame.png)  

Game over screen:  
![image](/images/GameOver.png)  

## To-Do

Would like to make a few additional updates in the future listed below:

    * More fleshed out level system, add experince bar and level up the Pokemon when exp is full
    * Status window with stats that increase as the Pokemon levels up
    * Battle system with possibility of game ending if the Pokemon is defeated