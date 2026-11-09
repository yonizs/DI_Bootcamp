//task 1
const article = document.querySelector("article");
const h1 = article.firstElementChild;
console.log(h1);

//task 2
article.lastElementChild.remove();

//task 3
const h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});

//task 4
const h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
    h3.style.display = "none";
});

//task 5
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    const paragraphs = document.querySelectorAll("p");
    for (const p of paragraphs) {
        p.style.fontWeight = "bold";
    }
});

//task 6
h1.addEventListener("mouseover", function() {
    const size = Math.floor(Math.random() * 101);
    h1.style.fontSize = size + "px";
});

//task 7
const secondP = document.querySelectorAll("p")[1];
secondP.addEventListener("mouseover", function() {
    secondP.style.transition = "opacity 1s";
    secondP.style.opacity = "0";
});