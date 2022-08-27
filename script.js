// Select and hide alert element
const alertEl = document.getElementById("alert");
alertEl.classList.add("hidden")

// Select all "glyph-box" class elements
var glyphBoxes = document.getElementsByClassName("glyph-box");

// Loop through each element and add a click event listener
for (var i = 0; i < glyphBoxes.length; i++) {
    glyphBoxes[i].addEventListener("click", function () {
        // Get the text from the element's "data-text" attribute
        var text = this.innerText;
        // Copy the text to the clipboard
        navigator.clipboard.writeText(text)
        .then(function () {
            // Show the alert
            alertEl.classList.remove("hidden");
            alertEl.innerText = "Copied " + text + " to clipboard";

            // Hide the alert after 1 second
            setTimeout(function () {
                alertEl.classList.toggle("hidden");
            }, 1000);
        })
        .catch(function (err) {
            console.error("Could not copy text: ", err);
        });
    });
}