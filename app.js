const navSlide = () => {
    const burger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list a");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-sliding");

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index/10 + 0.4}s`
                console.log()
            }
        })
    })


}


navSlide();