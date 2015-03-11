/* Created by Bryan Botsford on 3/9/2015
 Bryan W. Botsford
 SDI 1503 */

//Variables
var assignmentNames = ["quiz", "reading", "test", "research"];//This is assigning the assignments into a group
var numberOfAssignments = 4;//This variable will be used to know how many assignments there are
var total = "400 total points";//This variable will display the maximum amount of points

//Prompts
quiz = Number(prompt("What was your quiz grade?")); // This is creating a prompt for the user to enter their quiz grade
reading = Number(prompt("What was your reading grade?"));// This is creating a prompt for the user to enter their reading grade
test = Number(prompt("What was your test grade?"));//This is creating a prompt for the user to enter their test grade
research = Number(prompt("What was your research grade?"));// This is creating a prompt for the user to enter their research grade

//Outputs
console.log("The following is the the points you earned on all of the assignments" + " " + (quiz + reading + test + research) + "/" + total);//This is adding all 4 assignments that the user added into each of the prompts and then putting that before the total amount of points (400)
console.log("Your Final Grade is" + " " + (quiz + reading + test + research) / numberOfAssignments);//This is adding each of the assignments together and then dividing them by the number of assignments