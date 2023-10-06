


window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var topBtn = document.querySelector(".topup");
    if (scrollPosition > 200) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
   });