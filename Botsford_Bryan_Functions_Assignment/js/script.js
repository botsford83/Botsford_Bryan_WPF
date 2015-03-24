/**
 * Created by bryanbotsford1 on 3/20/15.
 */
// Botsford_Bryan_Function_Assignment
// SDI March2015


// Variables


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

// Maincode
