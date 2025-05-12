const blockct = document.querySelector(".sm-block");
const hamburger = document.querySelector("#dash");
function clickfn() {
    const computedDisplay = window.getComputedStyle(blockct).display;
    
    if (computedDisplay === 'none' || computedDisplay === '') {
        if (window.innerWidth <= 600) {
            blockct.style.display = 'block';
            hamburger.classList.remove("fa-bars");
            hamburger.classList.add("fa-close");
        }
    } else {
        blockct.style.display = 'none';
        hamburger.classList.remove("fa-close");
        hamburger.classList.add("fa-bars");
    }
}