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

const windChillElement = document.getElementById("windchill");

if (windChillElement) {
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent =
            `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}