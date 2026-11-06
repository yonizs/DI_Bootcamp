const div = document.getElementsByTagName("div")[0];
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

const items = document.getElementsByTagName("li");
items[0].style.display = "none";
items[1].style.border = "1px solid black";

document.body.style.fontSize = "20px";

if (div.style.backgroundColor === "lightblue") {
    const users = document.getElementsByTagName("li");
    alert("Hello " + users[0].textContent + " and " + users[1].textContent);
}