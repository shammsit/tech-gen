// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// HOME
function goMainHome() {
    window.location.href = "https://techgen.online/";
}

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade-in");

function reveal() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();