//task 1
const form = document.querySelector("form");
console.log(form);

//task 2
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
console.log(firstName, lastName);

//task 3
console.log(document.getElementsByName("firstname"));
console.log(document.getElementsByName("lastname"));

//task 4
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const first = firstName.value.trim();
    const last = lastName.value.trim();
    if (first === "" || last === "") {
        return;
    }
    const ul = document.querySelector(".usersAnswer");
    const li1 = document.createElement("li");
    li1.textContent = first;
    ul.appendChild(li1);
    const li2 = document.createElement("li");
    li2.textContent = last;
    ul.appendChild(li2);
});