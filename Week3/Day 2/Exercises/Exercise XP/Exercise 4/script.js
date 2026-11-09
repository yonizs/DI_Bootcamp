const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const radius = Number(radiusInput.value);
    const volume = (4/3) * Math.PI * radius ** 3;
    volumeInput.value = volume.toFixed(2);
});