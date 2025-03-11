// Function to check if the user is on a mobile device
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Function to check if the Material Icons stylesheet has loaded
function checkMaterialIconsLoaded() {
    var link = document.getElementById("materialIconsStylesheet");
    return link && link.sheet;
}

// Function to initialize the back-to-top button
function initializeBackToTopButton() {
    var btn = document.getElementById("backToTopBtn");

    if (isMobile()) {
        btn.style.display = "none"; // Hide button on mobile
        return;
    }

    if (checkMaterialIconsLoaded()) {
        btn.style.display = "inline-flex"; // Show the back-to-top button
    } else {
        setTimeout(initializeBackToTopButton, 100); // Retry until the stylesheet loads
    }
}

// Run this function once the window has loaded
window.onload = function() {
    initializeBackToTopButton();
    checkTopPosition();
};

// Function to check if the user is at the top of the page and adjust button visibility
function checkTopPosition() {
    var btn = document.getElementById("backToTopBtn");
    if (!btn) return;

    if (document.body.scrollTop <= 20 && document.documentElement.scrollTop <= 20) {
        btn.classList.add("fadeOut");
    } else {
        btn.classList.remove("fadeOut");
        btn.classList.add("fadeIn");
        btn.style.pointerEvents = "auto";
    }
}

window.onscroll = function() {
    scrollFunction();
    checkTopPosition();
};

function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");
    if (!btn) return;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.classList.remove("fadeOut");
        btn.style.pointerEvents = "auto";
    } else {
        btn.classList.remove("fadeIn");
        btn.classList.add("fadeOut");
        btn.style.pointerEvents = "none";
    }
}

// Function to handle back-to-top button click
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("backToTopBtn");
    if (btn) {
        btn.addEventListener("click", function(event) {
            if (!btn.classList.contains("fadeOut")) {
                event.preventDefault();
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        });
    }
});
