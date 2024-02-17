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

let emailValue = ""
let nameValue = ""

emailInput.addEventListener("input", (e) => emailValue = e.target.value)
nameInput.addEventListener("input", (e) => nameValue = e.target.value)

forms.forEach((form, formIdx) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		formIdx < 2 ? updateCurrentForm(formIdx) : ""
	});
});

topics.forEach((topic, topicIdx) => {
    topic.addEventListener("click", () => {
        topics[topicIdx].classList.toggle("active-topic");
    })
})

function updateCurrentForm(idx) {
	let isValid = true

	if(idx === 1) {
		printSummary();
		isValid = validateSecondForm()
	}
	
	if(isValid) {
		forms[idx].classList.add("form--concluded");
		forms[idx + 1].classList.remove("form--desactive");
		currentStepCircle[idx+1].classList.add("active");
		updateFooterForm(idx)
	}
}

function updateFooterForm(idx) {
	console.log(idx)
	let currForm = idx + 1;
	currentStepText.innerHTML = currForm;
	currForm++	
}

function printSummary() {
	updateFooterForm()
	const summaryName = document.querySelector(".summary__name");
	const summaryEmail = document.querySelector(".summary__email");
	const topics = document.querySelectorAll(".active-topic")
	const topicsWrapper = document.querySelector(".summary__topics");
		
    summaryName.innerHTML = nameValue
    summaryEmail.innerHTML = emailValue
	
	topics.forEach(item => {	
		const li = document.createElement("li")
		li.innerHTML = item.innerHTML
		topicsWrapper.appendChild(li)
	})
}

function validateSecondForm() {
	const topicsSelected = document.querySelectorAll(".active-topic");
	if (topicsSelected.length <= 0) {
		alert("Please select at least one topit");
		return false;
	} 
	return true
}