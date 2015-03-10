/**
 * Created by bryanbotsford1 on 3/9/15.
 */
    //Bryan W Botsford
    //SDI 1503


//Variables
var triangleValues = ["A", "B", "C"];
var sideA = "A";
var sideB = "B";
var sideC = "C";
var numberOfSides = 3;

//Prompts
triangleValues = prompt("What are the two sides given in the problem (separate with a comma)");
sideA = Number(prompt("What is the value of side A, if no value is given press okay"));
sideB = Number(prompt("What is the value of side B, if no value is given press okay"));
sideC = Number(prompt("What is the value of side C, if no value is given press okay"));

//Outputs
console.log("The two sides of the triangle are given" + " " + triangleValues + ".");
if (triangleValues == "a,b")
{
    console.log("The value of side A is" + " " + (sideA * sideA) + ".");
    console.log("The value of side B is" + " " + (sideB * sideB) + ".");
    console.log("The hypotenuse is" + " " + Math.sqrt(sideA * sideA + sideB * sideB) + ".");
}
else if (triangleValues == "a,c")
{
    console.log("The value of side A is" + " " + (sideA * sideA) + ".");
    console.log("The value of side C is" + " " + (sideC * sideC) + ".");
    console.log("The value of side B is" + " " + Math.sqrt(sideC * sideC - sideA * sideA) + ".");
}
else
{
    console.log("The value of side B is" + " " + (sideB * sideB) + ".");
    console.log("The value of side C is" + " " + (sideC * sideC) + ".");
    console.log("The value of side A is" + " " + Math.sqrt(sideC * sideC - sideB * sideB) + ".");
}