const start = Number(prompt("Enter a number to begin counting down bottles"));
let bottles = start;
let taken = 1;

while (bottles > 0) {
    console.log(bottles + " " + (bottles === 1 ? "bottle" : "bottles") + " of beer on the wall");
    console.log(bottles + " " + (bottles === 1 ? "bottle" : "bottles") + " of beer");

    const toTake= Math.min(taken, bottles);
    console.log("Take " + toTake + " down, pass " + (toTake === 1 ? "it" : "them ") + "around");

    bottles -= toTake;
    taken++;

    if (bottles > 0) {
        console.log(bottles + " " + (bottles === 1 ? "bottle" : "bottles") + " of beer on the wall");
    } else {
        console.log("0 bottle of beer on the wall")
    }
    console.log("");
}