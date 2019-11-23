# thoughtworks-code-challenge

This is my attempt at the code challenge given to me by ThoughtWorks. It is the Mars Rover code challenge.

## Thought Process
I broke this problem down into steps. The problem states was

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.



A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Input and Output

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM



Expected Output:

1 3 N

5 1 E


So instantly there are two important objects in this problem, the Rover and the Grid (area which the Rover can travel). As the Rover lands, it collects data about the Grid's dimensions. So instantly, within the premises of Object-Oriented-Programming (OOP), I can instantly see a relationship between these two classes. The Grid (parent) and Rover (child), in my solution you can see that the Rover inherits the dimensions of the Grid class, I set them to (x_lim, y_lim).

Afterwards, I started building the basic controls of the Rover class which would allow it to traverse through the Grid. This includes
1) Recieving instructions in the format of a string
2) Rotating the Rover
3) Moving the Rover by 1 unit



### Getting started
1) Make sure you you have the current version of Node.js installed
2) Clone this repository
3) In the correct directory, from the terminal type the command "npm install" which should install the dependancies
4) For the final output, type "node rover.js"
5) For testing, type the command "npm test" to view all the tests passing


#### Credits
For testing purposes, I used Mocha.js and Chai