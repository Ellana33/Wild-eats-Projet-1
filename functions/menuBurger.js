

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {
    link.addEventListener("mouseover", ()=> {
        link.classList.add("clic");
    });
    link.addEventListener("mouseleave", ()=> {
        link.classList.remove("clic");
    })
});
