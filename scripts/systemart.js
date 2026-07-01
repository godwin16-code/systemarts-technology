const hamburgerIcon = document.getElementById("hamburger");
const navPanel = document.getElementById("script");
const closeButton = document.querySelector(".navigationX button");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    hamburgerIcon.classList.toggle("open");
    navPanel.classList.toggle("open");
    overlay.classList.toggle("open");
}

if (hamburgerIcon && navPanel && overlay) {
    hamburgerIcon.addEventListener("click", toggleMenu);
}

if (closeButton && navPanel && hamburgerIcon && overlay) {
    closeButton.addEventListener("click", () => {
        navPanel.classList.remove("open");
        hamburgerIcon.classList.remove("open");
        overlay.classList.remove("open");
    });
}

if (overlay) {
    overlay.addEventListener("click", () => {
        navPanel.classList.remove("open");
        hamburgerIcon.classList.remove("open");
        overlay.classList.remove("open");
    });
}

// -----Hero Slider ----- //

const track = document.querySelector(".hero-track");
const slides = Array.from(document.querySelectorAll(".hero-slider .slide"));

let current = 0;

function showSlides(index) {
    if (!track || slides.length === 0) return;

    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === current);
    });
}

if (slides.length > 1) {
    setInterval(() => {
        showSlides(current + 1);
    }, 6000);
}

showSlides(0);


// const scroller = document.getElementById('featScroll');
// const thumb    = document.getElementById('scrollThumb');
 
// function updateThumb() {
//   // Ratio of visible width to total scrollable content width
//   const visibleRatio = scroller.clientWidth / scroller.scrollWidth;
//   const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
 
//   // How far the user has scrolled, as a 0–1 fraction
//   const scrollFraction = maxScrollLeft > 0
//     ? scroller.scrollLeft / maxScrollLeft
//     : 0;
 
//   const thumbWidthPercent = visibleRatio * 100;
 
//   thumb.style.width = thumbWidthPercent + '%';
//   thumb.style.left = scrollFraction * (100 - thumbWidthPercent) + '%';
// }
 
// scroller.addEventListener('scroll', updateThumb);
// window.addEventListener('resize', updateThumb);
 
// // Run once on load to set initial thumb size
// updateThumb();