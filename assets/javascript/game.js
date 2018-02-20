
//Problem 1: Wins: set to 0 , Guesses remaining set to 20
var wins = 0;
var remainder = 6;
//Problem 2: Create answers
var gods = ["athena", "demeter", "aphrodite", "artemis", "poseidon", "zeus", "ares", "hermes", "apollo", "hera", "hephaestus", "dionysus", "hestia"];
var letters = ["abcdefghijklmnopqrstuvwxyz"];


function startover() {
    // document.getElementById("reset").reset();
    location.reload();
}

//Display the wins and remaining guesses left
document.getElementById("remaining").innerHTML = remainder;
document.getElementById("wins").innerHTML = wins;

//To begin game, press any key. That will result in a random selection from the array. This word will then be taken and an array of its letters will be created. The underscore will then replace each of the letters. This will display on the screen. 
document.onkeyup = function (event) {
    var word = gods[Math.floor(Math.random() * gods.length)];
    console.log(word);
    var showHint = document.getElementById("hint")

    if (word === "athena") {
        showHint.innerHTML = "The Warrior Goddess";
    }
    if (word === "demeter") {
        showHint.innerHTML = "Goddess of Harvest";
    }
    if (word === "aphrodite") {
        showHint.innerHTML = "Goddess of Love";
    }
    if (word === "artemis") {
        showHint.innerHTML = "Goddess of Wild Animals";
    }
    if (word === "poseidon") {
        showHint.innerHTML = "God of the Sea";
    }
    if (word === "zeus") {
        showHint.innerHTML = "God of the Sky";
    }
    if (word === "ares") {
        showHint.innerHTML = "God of War";
    }
    if (word === "hermes") {
        showHint.innerHTML = "Messenger of the Gods";
    }
    if (word === "apollo") {
        showHint.innerHTML = "God of Music";
    }
    if (word === "hera") {
        showHint.innerHTML = "Goddess of Marriage";
    }
    if (word === "hephaestus") {
        showHint.innerHTML = "God of Fire";
    }
    if (word === "dionysus") {
        showHint.innerHTML = "God of Wine";
    }
    if (word === "hestia") {
        showHint.innerHTML = "Goddess of the Family";
    }

    var ansArray = [];
    for (var i = 0; i < word.length; i++) {
        ansArray[i] = "_ ";
        document.getElementById("answer").innerHTML = ansArray.join("");
    }
    //User guesses a letter, this letter is stored as userLetter. If the remainder of guesses is greater than zero, we enter the loop where we loop through the word. If the indexed letter equals the userLetter, that answer becomes the userletter and is pushed out to the html.     

    document.onkeyup = function (event) {
        userLetter = event.key;

        for (var j = 0; j < word.length; j++) {

            if (word[j] === userLetter) {
                ansArray[j] = userLetter;
                document.getElementById("answer").innerHTML = ansArray.join("");
            }
            //Problem 5: As user clicks, display letters either in answer or in letters used section

        } // closing of for loop

        var lettersUsed = document.getElementById("lettersused");
        var used = lettersUsed.innerHTML;
        var usedArray = Array.from(used);
        if (word.indexOf(userLetter) === -1 && usedArray.indexOf(userLetter) === -1) {

            lettersUsed.insertAdjacentHTML("beforeend", userLetter + " ");
            document.getElementById("remaining").innerHTML = remainder--;
        }//closing of if statement for letters
        if (remainder <= 0) {
            document.getElementById("image").innerHTML = "<img src=assets/images/stickfigure.jpeg>";
        };//closing of if statement for you lose

    }; // closing of child function



}; // closing of parent function

    //Problem 7: Once all correct letters have been input, user wins and score increases

    //Problem 8: If user gets uses all guesses remaining, user loses and hangman is displayed. Play again button? 

    //Problem 9: Game automatically chooses new answer and user plays again
    // }



