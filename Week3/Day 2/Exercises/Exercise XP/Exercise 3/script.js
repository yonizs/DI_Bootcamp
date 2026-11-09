// task 1
let allBoldItems;

//task 2
function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}
getBoldItems();

//task 3
function highlight() {
    for (const item of allBoldItems) {
        item.style.color = "blue";
    }
}

//task 4
function returnItemsToDefault() {
    for (const item of allBoldItems) {
        item.style.color = "black";
    }
}

//task 5
const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);