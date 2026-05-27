// Get the current year
const year = new Date().getFullYear();

// Get the document's last modified date (as a string)
const lastModifiedDate = document.lastModified;

// Select the DOM elements (adjust IDs if needed based on your HTML)
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

// Update the elements' content
if (currentYearElement) {
    currentYearElement.innerHTML = year;
}
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last Updated: <span>${lastModifiedDate}</span>`;
}

// code for the Weather information
const temperature = 9;
const windSpeed = 11;

// Wind Chill calculation function
function calculateWindChill(temp, speed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Lets display the wind Chill and other elements

// Lest assign an initial value to the wind chill variable
let windChill = "N/A";

// Lets set a condition for the windChill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

// Lets display to the page the values of the temperature, wind speed and others
document.getElementById("temperature").textContent = temperature + " °C";
document.getElementById("wind").textContent = windSpeed + " km/h";
document.getElementById("conditions").textContent = "Cloudy";
document.getElementById("windChill").textContent = windChill;
