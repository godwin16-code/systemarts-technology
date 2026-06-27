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