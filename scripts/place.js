const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("lastmodified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, speed) {
    return (
       13.13 + 0.6215 * temp -
       11.37 * Math.pow(speed, 0.16) +
       0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

document.getElementById("windchill").textContent = '${calculateWindChill(temperature, windSpeed)}';