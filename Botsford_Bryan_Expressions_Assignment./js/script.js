/* Created by Bryan Botsford on 3/9/2015
 Bryan W. Botsford
 SDI 1503 */

//Variables
var assignmentNames = ["quiz", "reading", "test", "research"];
var numberOfAssignments = 4;
var total = "400 total points";

//Prompts
quiz = Number(prompt("What was your quiz grade?"));
reading = Number(prompt("What was your reading grade?"));
test = Number(prompt("What was your test grade?"));
research = Number(prompt("What was your research grade?"));

//Outputs
console.log("The following is the the points you earned on all of the assignments" + " " + (quiz + reading + test + research) + "/" + total);
console.log("Your Final Grade is" + " " + (quiz + reading + test + research) / numberOfAssignments);