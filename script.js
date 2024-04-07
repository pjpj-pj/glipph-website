const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
})

const headerImage = document.querySelector(".header-image");
headerImage.addEventListener(
    "animationend",
    (e) => {
        setTimeout(() => {
            headerImage.classList.add("reveal");
        });
    },
    { once: true }
);

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
};

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption, 
    delay: 1500,
});

ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption, 
    delay: 2000,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption, 
    delay: 2500,
});

ScrollReveal().reveal("header .nav-links", {
    delay: 3000,
});

