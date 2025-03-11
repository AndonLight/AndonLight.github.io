document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-image");

    // Function to check if the user is on a mobile device
    function isMobile() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    images.forEach(image => {
        image.addEventListener("click", function () {
            if (!isMobile()) {
                window.open(image.src, "_blank");
            }
        });
    });
});
