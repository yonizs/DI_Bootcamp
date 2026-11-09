//task 1
const form = document.getElementById("libform");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();
    //task 2
    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        return;
    }
    //task 3
    const story = person + " went to the " + place + " to " + verb + " his " + adjective + " " + noun + ".";
    document.getElementById("story").textContent = story;
});

//task 5
const shuffleBtn = document.getElementById("shuffle");

shuffleBtn.addEventListener("click", function() {
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();
    const stories = [
        person + " went to the " + place + " to " + verb + " his " + adjective + " " + noun + '.',
        "One day, a " + adjective + " " + noun + " decided to " + verb + " with " + person + " in " + place + ".",
        "In " + place + ", " + person + " saw a " +adjective + " " + noun + " and started to " + verb + "."
    ];
    const storySpan = document.getElementById("story");
    let randomIndex = Math.floor(Math.random() * stories.length);

    while (stories[randomIndex] === storySpan.textContent) {
        randomIndex = Math.floor(Math.random() * stories.length);
    }

    storySpan.textContent = stories[randomIndex];
});