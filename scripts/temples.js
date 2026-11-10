const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.querySelector("#lastmodified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector(".navigation");

if (hamburger && navigation) {
    hamburger.addEventListener("click", () => {
        navigation.classList.toggle("open");
    
        if (hamburger && navigation) {
            if (navigation.classList.contains("open")) {
                hamburger.textContent = "X";
            } else {
                hamburger.textContent = "☰";
            }
        }
    });
}
    