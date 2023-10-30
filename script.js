// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10, guesses = 0, previousGuess = 0) {
    if (guesses >= totalGuesses) {
        return 0; // Exceeded total guesses
    }

    let userGuess = prompt(getPromptText(previousGuess, numToGuess));

    if (userGuess === null) {
        return 0; // User pressed Cancel
    } else if (userGuess.trim() === "") {
        alert("Please enter a number.");
    } else if (isNaN(userGuess) || !isFinite(userGuess)) {
        alert("Please enter a valid number.");
    } else {
        userGuess = Number(userGuess);

        if (userGuess === numToGuess) {
            return guesses + 1; // Correct guess
        } else if (userGuess < numToGuess) {
            alert(`${userGuess} is too small. Guess a larger number.`);
        } else {
            alert(`${userGuess} is too large. Guess a smaller number.`);
        }

        return playGuessingGame(numToGuess, totalGuesses, guesses + 1, userGuess);
    }

    return 0; // Error or cancel
}

function getPromptText(previousGuess, numToGuess) {
    if (previousGuess === 0) {
        return "Enter a number between 1 and 100.";
    } else if (previousGuess < numToGuess) {
        return `${previousGuess} is too small. Guess a larger number.`;
    } else {
        return `${previousGuess} is too large. Guess a smaller number.`;
    }
}
