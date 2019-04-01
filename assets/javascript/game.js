//vars for array and random word selection
var names = ["GOKU", "FRIEZA", "GOHAN", "GOTEN", "TRUNKS", "GOTENKS", "VEGETA", "PICCOLO", "BROLY", "BULMA"];
var word = names[Math.floor(Math.random() * names.length)];
console.log(word);

//array to hold "_" for selected word
var progressWord = [];

  for (var i = 0; i < word.length; i++) {
    progressWord.push("__");
    progressWord.toString()
    document.getElementById("correctL").innerHTML = progressWord.join(" ");
  }
  console.log(progressWord);

  //var for win-streak
  var wins = 0;
  document.getElementById("win").innerHTML = wins;

  //var for guesses remaining
  var guessesLeft = 8;
  document.getElementById("guessRem").innerHTML = guessesLeft;
  var i;

function letterInWord(letter) {
  // the array that will contain the char positions in the currentWord that has the 
  var positions = new Array();
  for (i = 0 ; i < word.length; i++) {
    if (word[i] === letter)
      positions.push(i);
  }
  return positions;
} 
function lettersToGuess() {
    var i ;
    var toGess = 0 ;
    for (i in progressWord) {
      if (progressWord[i] === "__"){
        toGess++;
      }
    }
    return toGess;
  }

  document.onkeyup = function (event) {
    var letter = event.key;
    var lettersGuessed = letter.toLocaleUpperCase();
    var i;

    console.log("You have typed a letter: ".concat(letter));

    var positions = letterInWord(lettersGuessed);


    // This will alert correct and compare the letter guessed with the current word
    if (positions.length) {
      console.log("User has pressed a letter from word: " + letter);

      for (i = 0 ; i < positions.length; i++) {
        progressWord[positions[i]] = lettersGuessed;
      }

      // replace progress Word underscore with letter pressed
      document.getElementById("correctL").innerHTML = progressWord.join(" ");
    //}else if(){

    }else {
      // alert("WRONG!");
      document.getElementById("lettersG").innerHTML += lettersGuessed + " ";

      // subtract a point from guesses left
      guessesLeft--;
      document.getElementById("guessRem").innerHTML = guessesLeft;
    }

    // This code will tell the user the game is over along with a message about
    // their win streak, then it will reset the game while quickly showing
    // what the word was
    if (guessesLeft === 0) {
      alert("Game Over! You finished with a streak of " + wins + " wins! The word was " + word);
      location.reload();
    }

    // this is the code that alerts you when you've won the game, then it will reset
    // the current word to begin another round
    if (lettersToGuess() == 0) {
      var phrases = ['Yup! Onto the next one!', 'Leggo!', 'You like the Air Jordan of Hangman!', 'Dont hurt em!', 'Turn up!',
      'Go and brush ya shoulders off!', 'In the zone!']
      var nextRound = phrases[Math.floor(Math.random() * phrases.length)];
      alert(nextRound);


      // reset guesses left
      guessesLeft = 8;
      document.getElementById("guessRem").innerHTML = guessesLeft;

      var resetLettersGuessed = ""

      // reset letters guessed
      document.getElementById("lettersG").innerHTML = resetLettersGuessed;

      // This code generates a new word to guess and then pushes out the blanks again
      word = names[Math.floor(Math.random() * names.length)];

      progressWord = [];
      for (i = 0; i < word.length; i++) {
          progressWord.push("__");
      }
      document.getElementById("correctL").innerHTML = progressWord.join(" ");

      // Add to the win total
      wins++;
      document.getElementById("win").innerHTML = wins;
      }
    }
