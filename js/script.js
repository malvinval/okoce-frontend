// select button and navbar element
const toggleButton = document.getElementById("toggleButton");
const navbar = document.getElementById("navbar-default");

// add event listener to the button
toggleButton.addEventListener("click", () => {
    // toggle the 'hidden' class to show/hide the navbar
    navbar.classList.toggle("hidden");
});