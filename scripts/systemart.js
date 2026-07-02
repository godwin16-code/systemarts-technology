// -----Get Menu Navigation -----///
const hamburgerIcon = document.getElementById("hamburger");
const navPanel = document.getElementById("script");
const closeButton = document.querySelector(".navigationX button");
const overlay = document.getElementById("overlay");

// ------Get Categories Navigation ------- //
const hamburgerIconCat = document.getElementById("hamburgerCat");
const navPanelCat = document.getElementById("scriptCat");
const closeButtonCat = document.querySelector(".navigationXCat button");
const overlayCat = document.getElementById("overlayCat");

// Create and display an open toggle menu function //
function togglePanel(icon, panel, overlay) {
    icon.classList.toggle("open");
    panel.classList.toggle("open");
    overlay.classList.toggle("open");
}

if (hamburgerIcon && navPanel && overlay) {
    hamburgerIcon.addEventListener("click", () => togglePanel(hamburgerIcon, navPanel, overlay));
}

if (hamburgerIconCat && navPanelCat && overlayCat) {
    hamburgerIconCat.addEventListener("click", () => togglePanel(hamburgerIconCat, navPanelCat, overlayCat));
}

// Close Button Display //
function closeButtonDisplay(panel, icon, overlay) {
    panel.classList.remove("open");
    icon.classList.remove("open");
    overlay.classList.remove("open");
}

if (closeButtonCat && navPanelCat && hamburgerIconCat && overlayCat) {
    closeButtonCat.addEventListener("click", () => closeButtonDisplay(navPanelCat, hamburgerIconCat, overlayCat));
}

if (closeButton && navPanel && hamburgerIcon && overlay) {
    closeButton.addEventListener("click", () => closeButtonDisplay(navPanel, hamburgerIcon, overlay));
}

// Overlay Display //
function overlayDisplay(panel, icon, overlay) {
    overlay.addEventListener("click", () => {
        panel.classList.remove("open");
        icon.classList.remove("open")
        overlay.classList.remove("open");
    });
}

if (overlay) {
    overlay.addEventListener("click", () => overlayDisplay(navPanel, hamburgerIcon, overlay));

}

if (overlayCat) {
    overlayCat.addEventListener("click", () => overlayDisplay(navPanelCat, hamburgerIconCat, overlayCat));
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