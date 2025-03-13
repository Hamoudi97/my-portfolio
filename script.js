const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const projectButtons = document.querySelectorAll(".show-btn")

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const submitMessage = document.getElementById("submitMessage")


document.addEventListener("DOMContentLoaded", function () {
    projectToggle();
    formValidation();
})

function projectToggle() {
    projectButtons.forEach(button => {
        button.addEventListener("click", function () {
            let details = this.nextElementSibling;
            let displayDetails = details.style.display === "block";
            details.style.display = displayDetails ? "none" : "block";
            this.textContent = displayDetails ? "Show Details" : "Hide Details";
        })
    });
}

function formValidation() {
    form.addEventListener("submit", function (event) {
        console.log("Form Submitted!");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        submitMessage.textContent = "";

        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())){
            emailError.textContent = "Invalid email format."
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        if (isValid) {
            submitMessage.textContent = "Your message has been sent! ✅"
            form.reset();
        }

        event.preventDefault();
    })
}

function validateEmail(email){
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}