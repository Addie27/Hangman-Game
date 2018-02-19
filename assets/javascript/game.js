
//Problem 1: Wins: set to 0 , Guesses remaining set to 20
var wins = 0;
var remainder = 20;
//Problem 2: Create answers
var gods = ["athena", "demeter", "aphrodite", "artemis", "poseidon", "zeus", "ares", "hermes", "apollo", "hera", "hephaestus", "dionysus", "hestia"];
var letters = ["abcdefghijklmnopqrstuvwxyz"];


function startover() {
    document.getElementById("reset").reset();
}

//Display the wins and remaining guesses left
document.getElementById("remaining").innerHTML = remainder;
document.getElementById("wins").innerHTML = wins;

//To begin game, press any key. That will result in a random selection from the array. This word will then be taken and an array of its letters will be created. The underscore will then replace each of the letters. This will display on the screen. 
document.onkeyup = function (event) {
    var word = gods[Math.floor(Math.random() * gods.length) + 1];
    console.log(word);
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
            else {
                remainder--;
                document.getElementById("remaining").innerHTML = remainder

                var lettersused = document.getElementById("lettersused");
                lettersused.insertAdjacentHTML('beforeend', userLetter + " ");


            }


        }
    }
}


    //Problem 7: Once all correct letters have been input, user wins and score increases

    //Problem 8: If user gets uses all guesses remaining, user loses and hangman is displayed. Play again button? 

    //Problem 9: Game automatically chooses new answer and user plays again
    // }



