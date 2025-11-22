//Background switcher
let images = [
    "images/background.jpg",
    "images/background2.jpg",
    "images/background3.jpg",
    "images/background4.webp",
    "images/background5.png"
];
let i = 0;
const homeDiv = document.getElementById("homeDiv1");
homeDiv.style.backgroundImage = `url(${images[i]})`;
setInterval(() => {
    i = (i+1)%images.length;
    document.getElementById("homeDiv1").style.backgroundImage =
        `url(${images[i]})`;
}, 6000);

//When scrolling navbar changes color
//Hover effect is added to a active page
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const links = document.querySelectorAll(".nav-links a");
    const current = window.location.pathname.split("/").pop();

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            navbar.classList.add("scrolled");
            links.forEach(link => {
                let href = link.getAttribute("href").split("/").pop();
                if (href === current) {
                    link.classList.add("active");
                }
            });
        } else {
            navbar.classList.remove("scrolled");
            links.forEach(link => {
                link.classList.remove("active");
            })
        }
    });
});




