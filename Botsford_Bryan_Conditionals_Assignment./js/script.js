/**
 * Created by bryanbotsford1 on 3/15/15.
 */
/* Bryan_Botsford
   March_2015
   SDI_Conditionals_Assignment
 */

// alerts

// Prompts
// code to prompt user for the value of each side and cast it into a number
A = Number(prompt("Please enter the value of side A, if no value is given, Press OK"));
B = Number(prompt("Please enter the value of side B, if no value is given, press OK"));
C = Number(prompt("Please enter the value of side C, if no value is given, press OK"));
// code to check if the user is trying to find the value of side C
if (C == " "){
    alert("You are trying to find the value for side C");
// code to check if the user is trying to find the value of side B
} else if (B == ""){
    alert("You are trying to find the value of side B");
// code to check if the user is trying to find the value of side A
} else {
    alert("You are trying to find the value of side A");// alerts user they are trying to find side A
}

// Variables
// created variable to square the users input from the prompts
var sideA = A * A;
var sideB = B * B;
var sideC = C * C;


// Outputs

console.log("This will allow you to use Pythagoras Theorem (A² + B² = C²) to find the hypotenuse of a right triangle");
// code to check if the user entered a value for side A and side B
if (A && B > 0) {
    console.log("Side A² = " + sideA);// displays the value of side A²
    console.log("Side B² = " + sideB);// displays the value of side B²
    console.log("Side C² = " + (sideA + sideB));// displays the value of side A² + side B²
    console.log("The hypotenuse is " + Math.sqrt(sideA + sideB) + "²");// displays the square root of side C²
} else if (A && C > 0){
    console.log("Side A² = " + sideA);// displays the value of side A²
    console.log("Side B² = " + (sideC - sideA));// displays the value of side B by taking side C² - side A²
    console.log("Side C² = " + sideC);// displays the value of side C²
    console.log("The hypotenuse is " + C + "²");// displays the hypotenuse the user already provided
} else {
    console.log("Side A² = " + (sideC - sideB));// displays the value of side A² by subtracting side B² from side C²
    console.log("Side B² = " + sideB);// displays the value of side B²
    console.log("Side C² = " + sideC);// displays the value of side C²
    console.log("The hypotenuse is " + C + "²");// displays the hypotenuse the user already provided
}
/* I used the value 3 for side A and the value 4 for side B.
I got the value 5 for side C.
*/
