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
function closePanel(panel, icon, overlay) {
    panel.classList.remove("open");
    icon.classList.remove("open");
    overlay.classList.remove("open");
}

if (overlay && navPanel && hamburgerIcon) {
    overlay.addEventListener("click", () => closePanel(navPanel, hamburgerIcon, overlay));
}

if (overlayCat && navPanelCat && hamburgerIconCat) {
    overlayCat.addEventListener("click", () => closePanel(navPanelCat, hamburgerIconCat, overlayCat));
}

// -----Hero Slider ----- //

const track = document.querySelector(".hero-track");
const slides = track ? Array.from(track.querySelectorAll(".slide")) : [];

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

// Categories Product //

const slider = document.querySelector(".categories-slider");
const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const dotsContainer = document.querySelector(".dots");

const cardsPerPage = 2;
const totalPages = Math.ceil(card.length / cardsPerPage);

let currentIndex = 0;

// Create dots automatically
for(let i = 0; i < totalPages; i++){

    const dot = document.createElement("span");

    dot.classList.add("dot");

    if(i === 0){
        dot.classList.add("active");
    }

    dotsContainer.appendChild(dot);

}

const dots = document.querySelectorAll(".dot");

// Update slider
function updateSlider(){

    cards.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");

}

// Click dots
dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentIndex = index;

        updateSlider();

    });

});

// Swipe Support
let startX = 0;
let endX = 0;

slider.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

    endX = e.changedTouches[0].clientX;

    const distance = startX - endX;

    // Swipe Left
    if(distance > 50){

        if(currentIndex < totalPages - 1){

            currentIndex++;

            updateSlider();

        }

    }

    // Swipe Right
    else if(distance < -50){

        if(currentIndex > 0){

            currentIndex--;

            updateSlider();

        }

    }

});

// View All //
const viewCard = document.querySelectorAll(".card");

viewCard.forEach(card => {
    const text = card.querySelector("p");
    const originalText = text.textContent;

    function showViewAll() {
        text.textContent = "View All";
        text.classList.add("view-all");
    }

    function restoreText() {
        text.textContent = originalText;
        text.classList.remove("view-all");
    }

    card.addEventListener("mouseenter", showViewAll);
    card.addEventListener("mouseleave", restoreText);

    card.addEventListener("touchstart", showViewAll);
    card.addEventListener("touchend", restoreText);
});