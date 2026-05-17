
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
    hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

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
