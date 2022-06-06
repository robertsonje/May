let checkButton = document.getElementById('check');    // check button
let guessedNumberField = document.getElementById('luckyNumber'); // number field
let messageBox = document.getElementById('resultMessage');
const NUMBER_TO_GUESS = 3;
let message = "";
let numberOfGuesses = 0;
checkButton.addEventListener("click", (e) => {
    if (guessedNumberField.value.length == 0)
    {
        message = "Please enter a number."
    } else {
        let value = parseInt(guessedNumberField.value);
        numberOfGuesses++;
        if (value === NUMBER_TO_GUESS) {
            message = "That's correct! ";
            if (numberOfGuesses === 1) {
                message += "You got it on the first try!";
            } else {
                message += "It took " + numberOfGuesses + " tries to get the correct number. ";
            }
        } else {
            message ="No, that's not the right number. Try again!";
        }
    }
    messageBox.innerHTML = message;
});

