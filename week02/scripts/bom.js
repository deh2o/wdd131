document.addEventListener("DOMContentLoaded", function () {

    const inputText = document.querySelector("#favchap");
    const buttonSubmit = document.querySelector("button");
    const listInputs = document.querySelector("#list");

    // Allowed Book of Mormon books
    const validBooks = [
        "1 Nephi",
        "2 Nephi",
        "Jacob",
        "Enos",
        "Jarom",
        "Omni",
        "Words of Mormon",
        "Mosiah",
        "Alma",
        "Helaman",
        "3 Nephi",
        "4 Nephi",
        "Mormon",
        "Ether",
        "Moroni"
    ];

    // Accessibility and feedback message area
    const feedback = document.createElement("p");
    feedback.setAttribute("aria-live", "polite");
    listInputs.parentNode.insertBefore(feedback, listInputs);

    // Button click event
    buttonSubmit.addEventListener("click", function () {

        // Format input
        const formattedInput = inputText.value
            .trim()
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        // Validate empty input
        if (formattedInput != "") {

            // Validate Book of Mormon books
            const bookName = formattedInput.replace(/\s+\d+$/, "");

            if (!validBooks.includes(bookName)) {
                feedback.textContent = "Please enter a valid Book of Mormon chapter.";
                inputText.focus();
                return;
            }

            // Limit to 10 entries
            if (listInputs.children.length >= 10) {
                feedback.textContent = "You can only add 10 favorite chapters.";
                inputText.focus();
                return;
            }

            // Prevent duplicates
            const existingItems = listInputs.querySelectorAll("li");

            for (let item of existingItems) {

                if (item.firstChild.textContent === formattedInput) {
                    feedback.textContent = "This chapter already exists.";
                    inputText.focus();
                    return;
                }
            }

            // Create list item
            const li = document.createElement("li");
            li.setAttribute("tabindex", "0");
            li.textContent = formattedInput;

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Del';

            deleteBtn.setAttribute(
                'aria-label',
                `Delete chapter: ${formattedInput}`
            );

            // Delete button event using requested pattern
            deleteBtn.addEventListener("click", function () {

                listInputs.removeChild(li);

                feedback.textContent = `${formattedInput} removed successfully.`;

                inputText.focus();
            });

            // Append elements
            li.appendChild(document.createTextNode(' '));
            li.appendChild(deleteBtn);

            // Add li to list
            listInputs.appendChild(li);

            // Success feedback
            feedback.textContent = `${formattedInput} added successfully.`;

            // Clear input and refocus
            inputText.value = '';
        }

        else {
            feedback.textContent = "Please enter a chapter.";
        }

        inputText.focus();
    });

});
