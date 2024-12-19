let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

function moveSlides(n) {
    slideIndex += n;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (slideIndex > totalSlides) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = totalSlides;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});
