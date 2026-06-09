//


//Footer
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
