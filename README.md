# Ship Battle Royale 2.0
With cheese. Public repository for the first CS372 project, Battleship.

By: Jim Samson and Curtis Fortenberry  
NOTE: The present working directory is under the battleShipV2 path

### What's working:
  +Pages load and do not break  

### What needs to be done:
  +Fix board object so it renders on the page  
  +Re-add in the game logic:  
    +Ship placement  
    +Firing logic  
    +Win conditions  
  +Implement multiplayer functionality  
  +Implement simple networking  


## Project History

**(2/09/2018)**  
We started to plan with what language we wanted to program in. Typically a programming language that doesn't look like a mess when we coded it. In the end, we wanted to create Battleship with ReactJS and uWebSockets C++ API. 

We decided to use the Scrum methodology for our project. 

**(2/10/2018)**  
I've recently just heard about Rekit Studio. Rekit Studio focuses on small/large web development by creating a NodeJS server as the backend. When connected to the web server, via browsers, you are greeted with an interface that shows all the components/actions on the screen. For the first page, we showed that a simple interface that shows the default page.

**(2/12/2018)**  
I decided that we aren't going to use uWebSockets anymore, since we can work with NodeJS and Rekit Studio in the backend to create the project.

We made a simple page that displays a simple image of a 10x10 board.

**(2/14/2018)**  
We tested our environment, the test came up with multiple errors. My best guess is that I (the infamous Jim) deleted some testing code for the testing suite. 

We ignored this as it wasn't causing any issues to our current version of code. 

**(2/26/2018)**  
Bugs started to show in our system. We definitely need to refactor code to display our game. 

**(2/27/2018)**  
What is the sound of two programmers with no time and a broken framework?

Short answer: trivia night at the Pub.

Tonight, in lieu of our testing framework causing us issues that it shouldn't have to the point that our project became unusable, we have made the decision to refresh and refactor our project. However unfortunate that it is that this is happening 24 hours before the project deadline, we believe to be the only way to at least produce something functioning.

The main issues that we solved during this time is routing issues in how Javascript source files where being loaded. Through this we much better acquainted with our refreshed and refactored framework, as it was a missing field in one of the import statements causing things to not load as they should.

We were unable to solve a particular error during this time (see Issues) as we did not exactly have a good access to power, and a single laptop that was well below 20%, but we were able to get almost back to where we were.

**(3/1/2018)**  
On our final night of working on the project we have decided to rework the concept of the game to fit what is currently possible within our current framework. Instead of having a 10x10 board we're going with a single row of cells and playing Ship Battle Royale 2.0 (w/Cheese), and instead of guessing exactly where the ships are the players must fire blindly at each other and by the power of 2D kinematics pray they hit their opponents ship.

We've since solved our issue of not getting the cells to render onto the page, however we have since encountered a new host of issues slowing down our development time. May whatever existing deity have mercy upon our fragile souls.


## User Stories and Ideas
| User Story        | Difficulty (in points/10)  |
| ----------------- | -----:|
| Neat and usable UI | 4 |
| Be able to play anywhere | 3 |
| Vs. Multiplayer or vs. COM | 6 |
| Place ships easily | 8 |
| Beautiful graphics and sfx  | 9 |
| Does your homework so you have more time for battleship  | 1 |
