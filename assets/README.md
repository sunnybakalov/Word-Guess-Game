
step 1 : computer picks random word: car
step 2 : the word is displayed as "_ _ _ _" with one _ per letter
step 3 : user presses key
step 4 : computer determines if the letter guessed is part of the word
    

    if (the letter guessed is correct) {
        replace the "_" on the screen with the letter that the user guessed
    } else if (the letter is incorrect ) {
        (the "guessesLeft" decreases by 1 && the "userGuess" is listed in the Letters already guessed area of the page)
    } else if (the word is fully guessed) {
        alert("You guessed the word correctly!");
    } else if (the guessesLeft === 0) {
        alert("you lose! try again")
    } 


Research inner Html

how to split a string & compare letter to letter (event listener)

createElement (where to store blank spaces)

the game would be in 1 if else loop






function myFunction() {
    var str = "How are you doing today?";
    var res = str.split("");
    document.getElementById("demo").innerHTML = res;
