// GLOBAL VARIABLES
//================================================================
// Arrays
var games = ["super mario bros", "mega man", "the legend of zelda", "donkey kong", "metroid" ];
var selectedWord = "";
var splitWord = [];
var blanks = [];
var numBlanks = 0;
var lettersGuessed = [];

// Variables
var wins = 0;
var guessesRemaining = 10;


// FUNCTIONS
//================================================================

function startGame() {
    selectedWord = games[Math.floor(Math.random() * games.length)];
    splitWord = selectedWord.split("");
    numBlanks = splitWord.length;

    // Reset
    guessesRemaining = 10;
    wrongLetters = [];
    blanks = [];

    // Populate blanks array with correct number of blanks.
    for (var i = 0; i < numBlanks; i++) {
        blanks.push("_");
    }

    // Change HTML to reflect round conditions
    document.getElementById("current-word").innerHTML = blanks.join(" ");
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = "Wins: " + wins;

    //Testing / Debugging
    console.log(selectedWord);
    console.log(splitWord);
    console.log(numBlanks);
    console.log(blanks);
}

function checkLetters(letter) {
    // Check if letter exists in code

    var isLetterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (selectedWord[i] === letter) {
            isLetterInWord = true;
        }
    }

    // Check where in the word the letter exists, then populate out blanks array.
    if (isLetterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (selectedWord[i] === letter) {
                blanks[i] = letter;
            }
        }
    }

    else {
        lettersGuessed.push(letter);
        guessesRemaining--
    }

    // Testing and Debugging
    console.log(blanks);
}

function roundComplete() {
    console.log("Win Count: " + wins + " | Guesses Left: " + guessesRemaining);

    // Update the HTML to reflect the most recent count stats
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    document.getElementById("random-game").innerHTML = blanks.join(" ");
    document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(" "); 

    // Check if user won
    if (splitWord.toString() === blanks.toString()) {
        wins++;
        alert("You Won!");
    
        // Update the win counter in the HTML
        document.getElementById("wins").innerHTML = "Wins: " + wins;

        startGame();
    }

    // Check if user lost
    else if (guessesRemaining == 0) {
        alert("You Lost!");

        startGame();
    }
}
// MAIN PROCESS
//================================================================

// Initiates the code for the first time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
    lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    
    // Testing / Debugging
    console.log(lettersGuessed);
}