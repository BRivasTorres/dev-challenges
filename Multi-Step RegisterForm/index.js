const btnStep1 = document.querySelector("#submit-step1")
const form1 = document.querySelector("#form-step1")
const from2 = document.querySelector("#form-step2")

btnStep1.addEventListener("click", (e) => {
    e.preventDefault()
    form1.classList.add("concluded")
    from2.classList.add("current")
})