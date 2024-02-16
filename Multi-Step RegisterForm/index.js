const forms = document.querySelectorAll(".main__form");
const nameInput = document.querySelector(".input__name");
const emailInput = document.querySelector(".input__email");

const btnStep1 = document.querySelector("#submit-step1");
const form1 = document.querySelector("#form-step1");

const form2 = document.querySelector(".form__step2");
const topics = document.querySelectorAll(".step2__topic")

const currentStepCircle = document.querySelectorAll(".circle");
const currentStepText = document.querySelector(".footer__step");
const btnStep2 = document.querySelector("#submit-step2");

const summaryName = document.querySelector(".summary__name")
const summaryEmail = document.querySelector(".summary__email")

let topicSelected = "";
let currForm = 1

forms.forEach((form, formIdx) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
        formIdx < 2 ? updateCurrentForm(formIdx) : ""
	});
});

topics.forEach((topic, topicIdx) => {
    topic.addEventListener("click", () => {
        topicSelected = topic.innerHTML
        topics.forEach((item, i) => {
            item.classList.toggle("active-topic", i === topicIdx)
        })
    })
})

function updateCurrentForm(idx) {
	if (idx === 1) {
		printSummary();
	}
	currForm++;
	forms[idx].classList.add("form--concluded");
	forms[idx + 1].classList.remove("form--desactive");
	currentStepCircle[idx + 1].classList.add("active");
	currentStepText.innerHTML = currForm;
	forms[idx + 1].style.display = "block";
}
//TODO resolver conflicto para renderizar los datos obtenidos en los formularios en sus etiquetas correspondientes

function printSummary() {
    summaryName.innerHTML = "fdafdafadfda"
    summaryEmail.innerHTML = emailInput.innerHTML
    console.log(summaryEmail, summaryName, emailInput.textContent)
}