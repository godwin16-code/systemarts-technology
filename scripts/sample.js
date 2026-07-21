const menuPages = document.querySelectorAll(".menu-page");

const submenuButtons = document.querySelectorAll(".has-submenu");

const backButtons = document.querySelectorAll(".back");

// Open Submenu
submenuButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        menuPages.forEach(page=>{

            page.classList.remove("active");

        });

        document
        .getElementById(button.dataset.target)
        .classList.add("active");

    });

});

// Back Button
backButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        menuPages.forEach(page=>{

            page.classList.remove("active");

        });

        document
        .getElementById(button.dataset.back)
        .classList.add("active");

    });

});