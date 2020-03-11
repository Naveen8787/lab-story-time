//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable


function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    return typeof address + typeof distanceFromTown + typeof hasNeighbours;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    let x = typeof parents;
    let y = typeof noOfSiblings;
    let z = typeof isNuclearFamily;
    if ((x == "string") && (y == "number") && (z == "boolean"))
        return true;
    else
        return false;

}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(age_Text, age_Number) {
    if (age_Text == "NaN")
        return age_Text;
    else if (age_Number == "NaN")
        return age_Number;
    else
        return NaN;
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?


function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    totalNoOfSweets = totalNoOfSweets - sweetsConsumedByKaren;
    var z = metersToTravel * sweetsConsumedInNMeters;
    if (z <= totalNoOfSweets) {
        totalNoOfSweets -= z;
        return totalNoOfSweets / 2;
    } else
        return "No sweets for Karen's friend";
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelsius(fahrenheit) {
    let x = typeof fahrenheit;
    if (x == "undefined")
        return "Technical Error!";
    else if (x == "object")
        return "Technical Error!";
    else if (x == "string")
        return "Technical Error!";
    else {
        var z = (fahrenheit - 32) * 5 / 9;
        return z;
    }
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

function aDifficultChoice(choice) {
    let z;
    if (choice == -1)
        return "Break down and give up all hope";

    else {
        var x = typeof choice;
        if (x == "undefined")
            return "Wasn't able to decide";
        if (choice == "I give up")
            return "Refused to do anything for Karen";
    }
    switch (choice) {
        case 1:
            z = "Take her daughter to a doctor";
            break;
        case 2:
            z = "Talk to her husband about it";
            break;
        case 3:
            z = "Counsel her daughter herself";
            break;
        case 4:
            z = "Lock her daughter in her room";
            break;
        default:
            z = nothing;
            break;

    }
    return z;
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy


function consoleKaren(strategies) {
    let z = "";
    for (var i = 0; i < strategies.length; i++)
        z = z + strategies[i] + " ";
    var t = z.length - 1;
    return t;


}