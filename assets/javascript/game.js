//the array that holds the possible words
var carsList = [
  "acura",
  "bmw",
  "chevrolet",
  "dodge",
  "ford",
  "honda",
  "infinity",
  "lada",
  "mazda",
  "nissan",
  "mercedes",
  "porsche",
  "ferrari",
  "bentley",
  "hummer",
  "volvo",
  "audi",
  "mitsubishi",
  "toyota",
  "maserati"
];

var alphabet = ["abcdefghijklmnopqrstuvwxyz"];
//we start off with 0 wins
var wins = 0;
//this is what keeps track of the wrong letters chosen so that they can be displayed on the DOM
var wrongLetter = [];
//this is how many guesses the user has left. with each key pressed, this # will decrease by 1 until reaching 0.
var guessesLeft = 10;
//This helps top pick a random word from the carsList array
var car = carsList[Math.floor(Math.random() * carsList.length)];
var splitCar = car.split("");

var showLives = document.getElementById("myLives");
var lettersGuessed = document.getElementById("wrongLetters");

var answers = [];
for (var i = 0; i < car.length; i++) {
  answers.push(" _ ");
  console.log(splitCar);
}

document.getElementById("myLives").innerHTML = guessesLeft;
document.getElementById("theWord").innerHTML = answers.join(" ");
document.getElementById("myWins").innerHTML = wins;

// This generates empty spaces based on the word length of the random "car" chosen

document.onkeyup = function(event) {
  var userGuess = event.key;
  var found = false;

  for (i = 0; i < splitCar.length; i++) {
    if (userGuess === splitCar[i]) {
      answers[i] = userGuess;
      found = true;
    }
  }
  console.log(answers);

if (guessesLeft >= 1) {
    if (found != true) {
        wrongLetter.push(userGuess);
        guessesLeft -= 1;
        document.getElementById("myLives").innerHTML = guessesLeft;
        document.getElementById("wrongLetters").innerHTML = wrongLetter.join(" ");
    } else {
        document.getElementById("theWord").innerHTML = answers.join(" ");
    }
} else {
    alert("Game over. Try again! Please refresh this page.");
}
};


//the function that lets us start the game.
// function startGame (){
//     carsList[Math.floor(Math.random() * carsList.length)];
// }