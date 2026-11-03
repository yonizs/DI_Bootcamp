let guesses = 0;

function playTheGame() {
    guesses = 0;
    const isUserReady = confirm("Would you like to play the game?");
    if (!isUserReady) {
        alert("No problem, Goodbye");
        return;
    }

    let answer = prompt("Enter a number between 0 and 10:");

    while (answer !== null && (!isOnlyNumbers(answer) || !isBetweenZeroAndTen(Number(answer)))) {
        answer = prompt("Enter a number between 0 and 10:");
    }

    if(answer === null) {
        return;
    }

    const userNumber = Number(answer);

    const computerNumber = generateRandomNumber();
    compareNumbers(userNumber, computerNumber);
}

function isOnlyNumbers(str) {
    if(str === null){
        return false;
    }
    const regex = new RegExp(/^[0-9]+$/);
    return regex.test(str);
}

function isBetweenZeroAndTen(number) {
    return number >= 0 && number <= 10;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
}

function compareNumbers(userNumber, computerNumber) {
    guesses++;

    if(userNumber === computerNumber) {
        alert("WINNER");
        return;
    }

    if (guesses > 3) {
        alert("Out of chances");
        return;
    }

    if(userNumber > computerNumber) {
        alert("Your number is bigger then the computer's, guess again");
    } else {
        alert("Your number is smaller then the computer's, guess again");
    }

    const newAnswer = prompt("Enter a new number between 0 and 10:");
    if(!isOnlyNumbers(newAnswer)) {
        alert("Sorry Not a number, Goodbye");
        return;
    }

    compareNumbers(Number(newAnswer), computerNumber)
}