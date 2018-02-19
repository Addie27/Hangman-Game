
//Problem 1: Wins: set to 0 
var wins = 0;
var remainder = 15;
//Problem 2: Create answers
var gods = ["athena", "demeter", "aphrodite", "artemis", "poseidon", "zeus", "ares", "hermes", "apollo", "hera", "hephaestus", "dionysus", "hestia"];

//Problem 3: Display 1 answer
document.onkeyup = function (event) {
    var word = gods[Math.floor(Math.random() * gods.length)];
    document.getElementById("remaining").innerHTML = remainder;

    var ansArray = [];
    for (var i = 0; i < word.length; i++) {
        ansArray[i] = "_ ";
        document.getElementById("answer").innerHTML = ansArray.join("");

        //Problem 6: Number of guesses remaining 

        //Problem 4: User clicks letters
        if (remainder > 0) {
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
                        document.getElementById("remaining").innerHTML = remainder;
                        document.getElementById("lettersused").insertAdjacentHTML("beforeend", userLetter) = (" " + userLetter);
                        
                    }
                }
            }
        }
        else {
            alert("You lose!");
        }
        //Problem 7: Once all correct letters have been input, user wins and score increases

        //Problem 8: If user gets uses all guesses remaining, user loses and hangman is displayed. Play again button? 

        //Problem 9: Game automatically chooses new answer and user plays again
        // }


}
}

