document.addEventListener("DOMContentLoaded", function() {
    // Code to execute after the DOM has fully loaded
    
    alert("Welcome to our booking system!");

    // Example of attaching an event listener to a button
    var submitButton = document.getElementById("submitBtn");
    if (submitButton) {
        submitButton.addEventListener("click", function(event) {
            // Perform actions here when the button is clicked
            var username = document.getElementById("username");
            if (username && username.value === "") {
                alert("Username cannot be empty!");
                event.preventDefault();  // Prevent form submission
            }
        });
    }

    // Example of changing text content dynamically
    var changeTextButton = document.getElementById("changeTextBtn");
    var textToChange = document.getElementById("dynamicText");
    if (changeTextButton && textToChange) {
        changeTextButton.addEventListener("click", function() {
            textToChange.textContent = "Text has been changed!";
        });
    }

    // Other interactive and dynamic functionality goes here...
});
