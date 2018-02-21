//Wins: set to 0 , Guesses set to 10;
var wins = 0;
var remainder = 15;
//Create answers
var gods = ["athena", "demeter", "aphrodite", "artemis", "poseidon", "zeus", "ares", "hermes", "apollo", "hera", "hephaestus", "dionysus", "hestia"];
var letters = ["abcdefghijklmnopqrstuvwxyz"];

//Start over button. JS method. Make sure to add onClick="myFunction()" in html. 
function startover() {
    location.reload();
}

document.getElementById("remaining").innerHTML = remainder; //Initial display
document.getElementById("wins").innerHTML = wins; //Initial display

document.onkeyup = function (event) { //Press and key to get started
    var word = gods[Math.floor(Math.random() * gods.length)]; //When key is pressed, this will initialize the random selection from my array of gods. 
    console.log(word); //console.log this to check for bugs

    lettersRemain = word.length; //set the letters remain to the word length 

    var showHint = document.getElementById("hint")//show hints for whichever word is selected

    if (word === "athena") {
        showHint.innerHTML = "The Warrior Goddess";//athena hint
    }
    if (word === "demeter") {
        showHint.innerHTML = "Goddess of Harvest";//demeter hint
    }
    if (word === "aphrodite") {
        showHint.innerHTML = "Goddess of Love";//aphrodite hint
    }
    if (word === "artemis") {
        showHint.innerHTML = "Goddess of Wild Animals";//artemis hint
    }
    if (word === "poseidon") {
        showHint.innerHTML = "God of the Sea";//poseidon hint
    }
    if (word === "zeus") {
        showHint.innerHTML = "God of the Sky";//zeus hint
    }
    if (word === "ares") {
        showHint.innerHTML = "God of War";//ares hint
    }
    if (word === "hermes") {
        showHint.innerHTML = "Messenger of the Gods";//hermes hint
    }
    if (word === "apollo") {
        showHint.innerHTML = "God of Music";//apollo hint
    }
    if (word === "hera") {
        showHint.innerHTML = "Goddess of Marriage";//hera hint
    }
    if (word === "hephaestus") {
        showHint.innerHTML = "God of Fire";//hephaestus hint
    }
    if (word === "dionysus") {
        showHint.innerHTML = "God of Wine";//dionysus hint
    }
    if (word === "hestia") {
        showHint.innerHTML = "Goddess of the Family";//hestia hint
    }


    var ansArray = [];//turns the word into an array
    for (var i = 0; i < word.length; i++) {//loops through the array
        ansArray[i] = "_ ";//replaces each letter with an underscore
        document.getElementById("answer").innerHTML = ansArray.join("");//pushes this out to display and joins the underscores together without a comma      
    }//closing of underscore loop 

    document.onkeyup = function (event) {//user presses key to guess a letter
        userLetter = event.key;//the letter is stored in a variable 

        for (var j = 0; j < word.length; j++) {//begin to loop through the word

            if (word[j] === userLetter) {//if the index of the word letter is equal to the user guess
                ansArray[j] = userLetter;//then the index of that letter becomes the user letter
                document.getElementById("answer").innerHTML = ansArray.join("");//this is pushed out to the display
                lettersRemain--; //letters remaining to be guessed in the word is decremented
                if (lettersRemain <= 0){//if the letters remaining is less than or equal to zero
                    document.getElementById("image1").innerHTML = "<img src=assets/images/youwin.png>"; //this image will appear when you win
                    wins++; //wins will increase by 1
                    document.getElementById("wins").innerHTML = wins;//and be updated on the screen    
                    document.onkeyup = function (event) {//restarts game
                        location.reload(true); 
                    }
                }//closing of my if letters remain statement
            }//closing of the if statement to loop through the word and replace letters with userguess 
        } // closing of for loop

        //After the userGuess is looped through the word

        var lettersUsed = document.getElementById("lettersused");//create a variable to grab the lettersused id
        var used = lettersUsed.innerHTML;//create a variable that connects lettersused id and changing content of that id
        var usedArray = Array.from(used);//usedArray creates an array of all the letters used

        if (word.indexOf(userLetter) === -1 && usedArray.indexOf(userLetter) === -1) {//if the userLetter is not in the word, and it is not already in the letters used array
            lettersUsed.insertAdjacentHTML("beforeend", userLetter + " ");//then the letter is inserted into the array
            document.getElementById("remaining").innerHTML = remainder--;//and the remainder is decremented 
        }//closing of if statement for letters

        if (remainder <= -1) {//if the remainder of tries falls below zero
            document.getElementById("image2").innerHTML = "<img src=assets/images/stickfigure.jpeg>";//the hangman image is dsiplayed 
            document.onkeyup = function (event) {//restarts game
                location.reload(); 
            }
        };//closing of if statement for you lose

    }; // closing of child function

}; // closing of parent function








