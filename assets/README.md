
step 1 : computer picks random word from an array of 20 cars: car
step 2 : the word is displayed as "_ _ _ _" with one _ per letter
step 3 : user presses key
step 4 : computer determines if the letter guessed is part of the word
step 5 : if (the letter is part of the word) {
    reveal the letter chosen
} else {
    show letter chosen in the "wrongLetters div
    decrease lives by 1
}


if the word is fully revealed {
    the "wins" go up by 1
}

the game is in a loop and the user keeps playing as the "wins" and "losses" accumulate.