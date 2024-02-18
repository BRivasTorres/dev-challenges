const forms = document.querySelectorAll(".main__form");
const nameInput = document.querySelector(".input__name");
const emailInput = document.querySelector(".input__email");
const topics = document.querySelectorAll(".step2__topic")

let emailValue = ""
let nameValue = ""

emailInput.addEventListener("input", (e) => emailValue = e.target.value)
nameInput.addEventListener("input", (e) => nameValue = e.target.value)

forms.forEach((form, formIdx) => {	
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		formIdx < 2 ? updateCurrentForm(formIdx) : finishForms()
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
		updateFooterForm(idx)
	}
}

function updateFooterForm(idx) {
	const currentStepCircle = document.querySelectorAll(".circle");
	const currentStepText = document.querySelector(".footer__step");
	
	currentStepCircle[idx + 1].classList.add("active");
	currentStepText.innerHTML = idx + 2;
}

function printSummary() {
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

function finishForms() {
	const wrapper = document.querySelector(".wrapper")
	const main = document.querySelector(".main")
	const footer = document.querySelector(".footer")
	main.style.display = "none"
	footer.style.display = "none"
	
	const finishMessage = document.createElement("h2")
	finishMessage.classList.add("wrapper__finish--message")
	finishMessage.innerHTML = "We have collected your information, thanks for your time"
	wrapper.appendChild(finishMessage)
	alert("✅Success");
}