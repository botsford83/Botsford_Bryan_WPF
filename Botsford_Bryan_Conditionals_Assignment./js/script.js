/**
 * Created by bryanbotsford1 on 3/15/15.
 */
/* Bryan_Botsford
   March_2015
   SDI_Conditionals_Assignment
 */

// Alerts


// Prompts
A = Number(prompt("Please enter the value of side A, if no value is given, press OK"));
B = Number(prompt("Please enter the value of side B, if no value is given, press OK"));
C = Number(prompt("Please enter the value of side C, if no value is given, press OK"));

// Variables
var sideA = A * A;
var sideB = B * B;
var sideC = C * C;


// Console
if (A && B > 0) {
    console.log("Side A² =" + " " + sideA);
    console.log("Side B² =" + " " + sideB);
    console.log("Side C² =" + " " + sideA + sideB);
} else if (A && C > 0){
    console.log("Side A² =" + " " + sideA);
    console.log("Side B² =" + " " + (sideC - sideA);
    console.log("Side C² =" + " " + sideC);
} else {
    console.log("Side A² =" + " " + (sideC - sideB));
    console.log("Side B² =" + " " + sideB);
    console.log("Side C² =" + " " + sideC);
}