document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".hero-img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds
});
