//create an array of products with id and name

const products = [
  { id: "p1", name: "Smart TV" },
  { id: "p2", name: "Laptop" },
  { id: "p3", name: "Washing Machine" },
  { id: "p4", name: "Refrigerator" }
];

// Lets populate the product options using javascript
const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});


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
