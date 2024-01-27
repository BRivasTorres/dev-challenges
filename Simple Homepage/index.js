const themeLightBtn = document.querySelector(".theme__night")
const themeSunBtn = document.querySelector(".theme__sun")
const headerH2 = document.querySelector(".content__h2")
const openNavMobile = document.querySelector(".open__btn")
const closeNavMobile = document.querySelector(".close__btn")
const navMobile = document.querySelector(".modal__close");
const wrapperApp = document.querySelector(".wrapper")

themeLightBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    headerH2.style.color = "var(--ligth-mode)"
})

openNavMobile.addEventListener("click", () => {
    navMobile.style.display = "block"
    openNavMobile.style.display = "none"
})

closeNavMobile.addEventListener("click", () => {
    navMobile.style.display = "none"
    openNavMobile.style.display = "block"
})