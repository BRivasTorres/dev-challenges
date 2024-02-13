const btnStep1 = document.querySelector("#submit-step1")
const form1 = document.querySelector("#form-step1")
const from2 = document.querySelector("#form-step2")

const currentStepCircle = document.querySelectorAll(".circle");
const currentStepText = document.querySelector(".footer__step");

const forms = document.querySelectorAll(".main__form")
const nameInputs = document.querySelectorAll(".input__name")
const emailsInputs = document.querySelectorAll(".input__email")

forms.forEach((form, formIdx) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        validInputs(formIdx)
    })
})

function validInputs(idx) {
    const currentInputName = nameInputs[idx].value.trim()
    const currentInputEmail = emailsInputs[idx].value.trim()
    
    if(currentInputName === "" || currentInputEmail === "") {
        alert("Please complete the fileds")
    } else {
        forms[idx].classList.add("concluded")
        currentStepCircle[idx+1].classList.add("active")
        currentStepText.innerHTML = idx +2        
        // forms[idx + 1].style.display = "block"
    }
}