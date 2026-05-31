
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    year: 2005,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    year: 1888,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    year: 2015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    year: 2020,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    year: 1974,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    year: 1986,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    year: 1983,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Belem Brazil",
    location: "Belem, Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    year: 2022,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Boston, Massachusetts",
    dedicated: "2000, October, 1",
    area: 69600,
    year: 2000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
  },
  {
    templeName: "Coban Guatemala",
    location: "Coban, Guatemala",
    dedicated: "2004, June, 9",
    area: 8772,
    year: 2004,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
  },
  {
    templeName: "Guadalajara Mexico",
    location: "Guadalajara, Mexico",
    dedicated: "2001, April, 29",
    area: 10700,
    year: 2001,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/105-Guadalajara-Mexico-Temple.jpg"
  },
  {
    templeName: "Vancouver Washington",
    location: "Vancouver, Washington",
    dedicated: "2025, August, 23",
    area: 69600,
    year: 2025,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-washington-temple/vancouver-washington-temple-52259-main.jpg"
  },
];

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
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

// nav event listeners
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', (e) => {
    // Stop page from jumping up due to '#' hrefs
    e.preventDefault();

// Grabs text from inside <a> tag (e.g. "Home", "Old")
    const filterType = e.target.textContent.trim().toLowerCase();

let filteredTemples = temples;

 // Filter array logic based on navigation selection
    if (filterType === 'old') {
      filteredTemples = temples.filter(t => t.year < 1900);
    } else if (filterType === 'new') {
      filteredTemples = temples.filter(t => t.year > 2000);
    } else if (filterType === 'large') {
      filteredTemples = temples.filter(t => t.area > 90000);
    } else if (filterType === 'small') {
      filteredTemples = temples.filter(t => t.area < 10000);
    }

    // "home" acts as the fallback and keeps the full array intact
    createTempleCards(filteredTemples);
  });
});


function createTempleCards(templesList) {

  // clear defaults
      document.getElementById("container").innerHTML = "";

    // loop
    templesList.forEach(temple => {

        // create the temple properties
        let tempCard = document.createElement("figure");
        let tempImg = document.createElement("img");
        let tempName = document.createElement("div");
        let tempLocation = document.createElement("div");
        let tempDedication = document.createElement("div");
        let tempArea = document.createElement("div");

        // assign each of the tags to the correct array data
        tempImg.setAttribute("src", temple.imageUrl);
        tempImg.setAttribute("alt", `${temple.templeName} Temple`);
        tempImg.setAttribute("loading", "lazy");
        tempName.innerHTML = `<span class="tempLabel">Temple Name:</span> <span>${temple.templeName}</span>`;
        tempLocation.innerHTML = `<span class="tempLabel"">Location:</span> <span>${temple.location}</span>`;
        tempDedication.innerHTML = `<span class="tempLabel"">Dedicated:</span> <span>${temple.dedicated}</span>`;
        tempArea.innerHTML = `<span class="tempLabel">Area:</span> <span>${temple.area}</span>`;

        // append the attributes to the figure
        tempCard.appendChild(tempImg);
        tempCard.appendChild(tempName);
        tempCard.appendChild(tempLocation);
        tempCard.appendChild(tempDedication);
        tempCard.appendChild(tempArea);

        //lets append the tempCard to the page
        document.getElementById("container").appendChild(tempCard);
    })
}

createTempleCards(temples);
