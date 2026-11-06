const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const ul = document.getElementsByTagName("ul")[0];

const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log(firstLi.textContent);
console.log(lastLi.textContent);