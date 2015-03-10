/**
 * Created by bryanbotsford1 on 3/9/15.
 */
    //Bryan W Botsford
    //SDI 1503


//Variables
var rightTriangle;
var A;
var B;

//Prompts
rightTriangle = confirm("The Pythagorean Theorem is used to find the hypotenuse of a right angled triangle.  The formula is a2 + b2 = c2.");
A = Number(prompt("What is the value of side A"));
B = Number(prompt("What is the value of side B"));

//Outputs
console.log("The Value of side A is" + " " + (A * A));
console.log("The Value of side B is" + " " + (B * B));
console.log("The hypotenuse or the value of side C is" + " " + Math.sqrt(A * A + B * B));