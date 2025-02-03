// Function to open the game menu
function openMenu() {
    closeAll(); // Close all other sections
    var menu = document.getElementById("game-menu"); // Get the game menu element by ID
    menu.style.display = "block"; // Set the display style to block to make it visible
}

// Function to close the game menu
function closeMenu() {
    document.getElementById("game-menu").style.display = "none"; // Set the display style to none to hide the game menu
}

// Function to open the about section
function openAbout() {
    closeAll(); // Close all other sections
    document.getElementById("game-about").style.display = "block"; // Set the display style to block to make the about section visible
}

// Function to close the about section
function closeAbout() {
    document.getElementById("game-about").style.display = "none"; // Set the display style to none to hide the about section
}

// Function to open the upcoming games section
function openUpcoming() {
    closeAll(); // Close all other sections
    document.getElementById("upcoming-game").style.display = "block"; // Set the display style to block to make the upcoming games section visible
}

// Function to close the upcoming games section
function closeUpcoming() {
    document.getElementById("upcoming-game").style.display = "none"; // Set the display style to none to hide the upcoming games section
}

// Function to open the contact section
function openContact() {
    closeAll(); // Close all other sections
    document.getElementById("contact-game").style.display = "block"; // Set the display style to block to make the contact section visible
}

// Function to close the contact section
function closeContact() {
    document.getElementById("contact-game").style.display = "none"; // Set the display style to none to hide the contact section
}

// Function to close all sections
function closeAll() {
    closeMenu(); // Call the function to close the game menu
    closeAbout(); // Call the function to close the about section
    closeUpcoming(); // Call the function to close the upcoming games section
    closeContact(); // Call the function to close the contact section
}