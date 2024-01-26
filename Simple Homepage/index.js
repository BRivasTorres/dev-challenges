const themeLightBtn = document.querySelector(".theme__night")
const themeSunBtn = document.querySelector(".theme__sun")
const headerH2 = document.querySelector(".content__h2")
const wrapperApp = document.querySelector(".wrapper")

themeLightBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    headerH2.style.color = "var(--ligth-mode)"
})