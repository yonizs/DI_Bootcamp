// Exercise 1 - part 1
function infoAboutMe() {
    console.log("My name is Yoni.");
}

infoAboutMe()

// Exercise 1 - part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("Your name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor + ".");
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 - tips
function calculateTip() {
    const bill = Number(prompt("What is the bill amount?"));
    let tip;

    if (bill < 50) {
        tip = bill * 0.20;
    } else if (bill <= 200) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.10;
    }

    console.log("Tip: " + tip);
    console.log("Final bill: " + (bill + tip));
}

// calculateTip();

// Exercise 3 - numbers divisable by 23

function isDivisible() {
    let sum = 0;

    for(let i = 0; i <= 500; i++) {
        if(i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }

    console.log("Sum: " + sum);
}

isDivisible();

// Exercise 4 - Shopping List

const stock = {
    banana: 6,
    apple: 0,
    pear: 12,
    orange: 32,
    blueberry: 1
};

const prices = {
    banana: 4,
    apple: 2,
    pear: 1,
    orange: 1.5,
    blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;

    for(const item of shoppingList) {
        if(item in stock && stock[item] > 0) {
            total += prices[item];
        }
    }

    return total;
}

console.log(myBill());


// Exercise 5 - What's in my wallet?

function changeEnough(itemPrice, amountOfChange) {
    const totalCents = amountOfChange[0] * 25
        + amountOfChange[1] * 10
        + amountOfChange[2] * 5
        + amountOfChange[3];

    return totalCents >= Math.round(itemPrice * 100);
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 6 - Vacation Costs

function hotelCost() {
    let nights = prompt("How many nights in the hotel?");

    while (nights === null || nights.trim() === "" || isNaN(nights)) {
        nights = prompt("Enter a number of nights:");
    }

    return Number(nights) * 140;
}

function planeRideCost() {
    let destination = prompt("What is your destination?");

    while(destination === null || destination.trim() === "" || !isNaN(destination)) {
        destination = prompt("Enter a destination name:");
    }

    destination = destination.trim().toLowerCase();

    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days = prompt("How many days will you rent the car?");

    while (days === null || days.trim() === "" || isNaN(days)) {
        days = prompt("Enter a number of days:");
    }

    days = Number(days);
    let cost = days * 40;

    if (days > 10) {
        cost *= 0.95;
    }

    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log("The car cost: $" + car + ", the hotel cost: $" + hotel + ", the plane tickets cost: $" + plane);

    return hotel + plane + car;
}

console.log("Total vacation cost: $" + totalVacationCost());