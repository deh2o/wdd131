document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.querySelector("#favchap");
    const buttonSubmit = document.querySelector("button");
    const listInputs = document.querySelector("#list");

    // Button click event
    buttonSubmit.addEventListener("click", function () {

        if (inputText.value != "") {
            // Create list item
        const li = document.createElement("li");
        li.textContent = inputText.value;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Del';
        deleteBtn.setAttribute('aria-label', `Delete chapter: ${inputText.value}`);

        // Delete button event using requested pattern
        deleteBtn.addEventListener("click", function () {
            listInputs.removeChild(li);
            inputText.focus();
        });

        // Append elements
        li.appendChild(document.createTextNode(' '));
        li.appendChild(deleteBtn);

        // Add li to list
        listInputs.appendChild(li);
        inputText.value = '';
        }
        // Clear input and refocus
        inputText.focus();
    });

});
