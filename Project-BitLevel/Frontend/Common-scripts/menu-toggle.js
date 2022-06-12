// const hamburger = document.querySelector(".hamburger");
const burgerIcon = document.getElementById("burger-menu");
const asideMenu = document.querySelector(".aside-menu");
const logotype = document.getElementById("top-left-logo");

console.log(burgerIcon);
console.log(asideMenu);
console.log(logotype);

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    asideMenu.classList.toggle("active");
    logotype.classList.toggle("active");
});

const asideLinks = document.querySelectorAll(".nav-links");

asideLinks.forEach((links) => {
    links.addEventListener("click", () => {
        burgerIcon.classList.remove("active");
        asideMenu.classList.remove("active");
        logotype.classList.remove("active");
    })
})
