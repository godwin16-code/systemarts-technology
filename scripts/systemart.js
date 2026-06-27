const hamburgerIcon = document.getElementById("hamburger");
const navPanel = document.getElementById("script");
const closeButton = document.querySelector(".navigationX button");

if (hamburgerIcon && navPanel) {
    hamburgerIcon.addEventListener("click", () => {
        hamburgerIcon.classList.toggle("open");
        navPanel.classList.toggle("open");
    });
}

if (closeButton && navPanel && hamburgerIcon) {
    closeButton.addEventListener("click", () => {
        navPanel.classList.remove("open");
        hamburgerIcon.classList.remove("open");
    });
}