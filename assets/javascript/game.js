
//Problem 1: Wins: set to 0 
var wins = 0; 

//Problem 2: Create answers
var gods = ["Athena", "Demeter", "Aphrodite", "Artemis", "Poseidon", "Zeus", "Ares", "Hermes", "Apollo", "Hera", "Hephaestus", "Dionysus", "Hestia"]; 

//Problem 3: Display 1 answer
for (i=0; i<gods.length; i++){
    var answer = gods[Math.floor(Math.random() * gods.length)];
    //answer length
    //display that amount of characters underlined
    document.getElementById("answer").innerHTML = answer;
}

//Problem 4: User clicks letters

//Problem 5: As user clicks, display letters either in answer or in letters used section

//Problem 6: Number of guesses remaining 

//Problem 7: Once all correct letters have been input, user wins and score increases

//Problem 8: If user gets uses all guesses remaining, user loses and hangman is displayed. Play again button? 

//Problem 9: Game automatically chooses new answer and user plays again



