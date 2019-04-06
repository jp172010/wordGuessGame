//Var for array of names and random name
var names = ["GOKU", "FRIEZA", "GOHAN", "GOTEN", "TRUNKS", "GOTENKS", "VEGETA", "PICCOLO", "BROLY", "BULMA"];
var name = names [Math.floor(Math.random()*names.length)];
console.log (name);

//Var for array of "_" = length of name
var hiddenWord = [];
for ( var i = 0; i < name.length; i++){
    hiddenWord.push("_");
    document.getElementById("correctL").innerHTML = hiddenWord.join(" ");
}
console.log(hiddenWord);
//Var for guessed-letters array
var guessedLetters = []

//Var for win-streak and guesses-left
var wins = 0;
document.getElementById("win").innerHTML = wins;
var guessesLeft = 8;
document.getElementById("guessRem").innerHTML = guessesleft = 8;
var i;
//Function for checking if guessed-letter is in name
function letterInName(letter){
    var positions = new Array();
    for(i = 0; i < name.length; i++){
        if (name[i]=== letter){
        positions.push(i);
        }
    }
    return positions;
}

//Function to monitor if a player has won
function lettersToGuess() {
    var i ;
    var toGess = 0 ;
    for (i in hiddenWord) {
        if (hiddenWord[i] === "_"){
            toGess++;
        }
    }
    return toGess;
}

//Event function for capturing a players guess
document.onkeyup = function (event){

    //Vars for event.key and letter positions
    var letter = event.key;
    var letterGuessed = letter.toLocaleUpperCase();
    var i;
    var positions = letterInName(letterGuessed);

    //If positions.length is true push letter to hiddenWord array
    if(positions.length){
        for(i=0; i < positions.length; i++){
            hiddenWord[positions[i]] = letterGuessed;
        }
        document.getElementById("correctL").innerHTML = hiddenWord.join(" ");
    }
    //Else if the key pressed is a letter A-Z and not already in the guessedLetters array push to guessedLetters array and subtract a guess
    else if(event.keyCode >=65 && event.keyCode <=90 && guessedLetters.indexOf(letter) < 0){
        guessedLetters.push(letter);
        document.getElementById("lettersG").innerHTML = guessedLetters.join(" ");
        guessesLeft--;
        document.getElementById("guessRem").innerHTML = guessesLeft;
    }
    //Otherwise alert to press another button
    else{
        alert("Press another letter!!")
    }
    //Code to identify is you lose
    if (guessesLeft === 0) {
        alert("Game Over! You finished with a streak of " + wins + " wins! The word was " + name);
        location.reload();
    }
    //Code to identify that you win
    if (lettersToGuess() == 0) {
        alert("You Win!");
  
  
        // reset game
        guessesLeft = 8;
        document.getElementById("guessRem").innerHTML = guessesLeft;
  
        guessedLetters = []
        document.getElementById("lettersG").innerHTML = guessedLetters;
  
        name = names[Math.floor(Math.random() * names.length)];
  
        hiddenWord = [];
        for (i = 0; i < name.length; i++) {
            hiddenWord.push("_");
        }
        document.getElementById("correctL").innerHTML = hiddenWord.join(" ");
  
        // Add to the win-streak
        wins++;
        document.getElementById("win").innerHTML = wins;
    }
}
