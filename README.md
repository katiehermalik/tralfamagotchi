
# Tralfamagotchi

A Vonnegut themed Tamagotchi game.

A simple game for any Kurt Vonnegut fans out there. Be a caregiver for a lost Tralfamadorian! Help them to survive while you look for a replacement part for their broken spaceship so they can return home to Tralfamadore before they grow too old to make the journey!

- [What is a Tralfamadorian?](https://en.wikipedia.org/wiki/Tralfamadore)

## Index

- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Technologies](#technologies)

## User Stories

When the user lands on the page, there will be clearly defined tabs in the top middle of the screen with information on how to begin the game. 

The 'rules' tab will be easily accessible throughout the game in case a reminder of the game play is needed. When the 'rules' tab is active, timing functions will pause.

Game play will involve the user keeping track of the values of sustenance, energy, and engagement (which are set to start at 10 and continually decreasing at steady increments during the game). As a value approaches 0, the user will have to click the corresponding button that would meet the Tralfamagotchi's needs and raise that value back to 10 at the max. As the user clicks those "care" buttons, the Tralfamagotchi will perform a corresponding animation linked to the specific button.

Behavior of the "care" buttons: 
- The 'lights' button will switch the game to 'dark mode' and the user will only be able to see the Tralfamagotchi's eye. While in dark mode, the Tralfamagotchi's energy will rise in a steady increment, but the other 2 buttons will be disabled. The Tralfamagotchi won't eat or play while it is sleeping. 

- The 'food' button will feed the Tralfamagotchi and increase its level of sustenance by a steady increment.

- The 'engage' button will make the Tralfamagotchi dance and will increase the level of engagement by a steady increment. 

A 'reset' tab will allow the user to reset the game. Once the 'reset' tab is clicked, the time will return to 0, and the values of sustenance, energy, and engagement will return to 10. The user will not have to input the name value again unless the browser is refreshed. 

A 'rename' tab is placed next to the name value for ease in renaming the Tralfamagotchi. The user can choose to rename the Tralfamagotchi as often as they'd like, however game play and timers do not pause while the name tab is open. The default name will be Salo if a different name is not given.

As soon as sustenance, energy, or engagement reaches 0, a 'game over' alert will appear on the screen and the user will be prompted on whether or not they'd like to play again.


## Wireframes

### Landing Page 

A click on the 'play' tab will start the game. Click 'reset' button to reset the game without reseting the 'name' value.

![image](images/landing.png)

### Landing page with 'rename' tab active

'Rename' tab will slide open when clicked and slide close once 'ok' button is clicked.

![image](images/rename_active.png)

### Landing Page with 'rules' tab active

'Rules' tab will slide open once clicked and slide close as mouse leaves.

![image](images/rules_active.png)

## Technologies





