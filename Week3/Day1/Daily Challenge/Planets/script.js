const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const colors = ["gray", "orange", "blue", "red", "brown", "gold", "lightblue", "darkblue"];
const moons = [0, 0, 1, 2, 115, 293, 29, 16];

const section = document.getElementsByClassName("listPlanets")[0];

for (let i = 0; i < planets.length; i++) {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = colors[i];
    planetDiv.textContent = planets[i];
    section.appendChild(planetDiv);
    const moonGroup = document.createElement("div");
    moonGroup.style.display = "flex";
    moonGroup.style.flexWrap = "wrap";
    moonGroup.style.width = "400px";
    moonGroup.style.marginBottom = "20px";

    for (let j = 0; j < moons[i]; j++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        moonDiv.style.position = "static";
        moonGroup.appendChild(moonDiv);
    }
    section.appendChild(moonGroup);
}

