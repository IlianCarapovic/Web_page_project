function navBarChanger(){
    const navbar = document.getElementById("navbar");
    const links = document.querySelectorAll(".nav-links a");
    const current = window.location.pathname.split("/").pop();window.addEventListener("scroll", () => {
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
}