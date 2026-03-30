document.getElementById("year").textContent = new Date().getFullYear();

function goHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goMainHome() {
    window.location.href = "https://techgen.online/";
}