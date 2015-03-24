/**
 * Created by bryanbotsford1 on 3/20/15.
 */
// Botsford_Bryan_Function_Assignment
// SDI March2015


// Variables
var myString = "The winning numbers are: ";
var PowerBallNum = "The powerball number is " + Math.floor((Math.random() * 34) + 1);

// Functions
// Function to run for the powerball lottery numbers
function powerball() {
    //Created an array to store the random numbers inside
    var pbn = [];
    // While loop to run and add numbers inside the array up to 5
    while(pbn.length < 5) {
        var random = Math.round((Math.random() * 58) + 1);// created a variable allowing a random number to generate
        var found = false;// created variable which I will use to check for duplications
        // For statement to to keep adding "p" until it reaches the .length which is 5
        for (var p = 0; p < pbn.length; p++) {
            // Checking to make sure a number was not already selected and if it was then break
            if(pbn[p] == random) {
                found = true;
                break;
            }

        }
        // Once a number was found then run the random generation again, adding it to the pbn array
        if (!found) {
            pbn[pbn.length] = random;
        }
    }
    // Returns variable to use powerball() outside of the function
    return pbn;
}

// Function to run for the florida lottery numbers
function fLottery () {
    //Created an array to store the random numbers inside
    var fln = [];
    // While loop to run and add numbers inside the array up to 6
    while(fln.length < 6) {
        //Created a variable for a random math generator, used 53 and 1 since there the numbers are 1 between 53
        var random = Math.round((Math.random() * 52) + 1);
        // Created a variable to determine if a number is found
        var found = false;
        // For statement to to keep adding "p" until it reaches the .length which is 6
        for (var p = 0; p < fln.length; p++) {
            // Checking to make sure a number was not already selected and if it was then break
            if(fln[p] == random) {
                found = true;
                break;
            }
        }
        // Once a number was found then run the random generation again, adding it to the fln array
        if (!found) {
            fln[fln.length] = random;
        }
    }
    // Returns variable to use fLottery() outside of the function
    return fln;
}

// Maincode
// Asking user if they would like to see the winning powerball numbers or florida lottery numbers
myTicket = confirm("Press OK for the winning Powerball numbers or Press Cancel for the winning Florida Lottery numbers.");
// Checks if the user selected okay then runs the following code
if (myTicket === true) {
    powerball();
//OutPut
    console.log(myString + powerball() + ", " + PowerBallNum + ".");
}
// Checks if the user selected anything other than ok, than runs the following code.
else {
    fLottery();
// Output
    console.log(myString + fLottery());
}