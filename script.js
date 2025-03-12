const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const projectButtons = document.querySelectorAll(".show-btn")


document.addEventListener("DOMContentLoaded", function(){
    projectToggle();
    formValidation();
})

function projectToggle(){
    projectButtons.forEach(button => {
        button.addEventListener("click", function(){
            let details = this.nextElementSibling;
            let displayDetails = details.style.display === "block";
            details.style.display = displayDetails ? "none" : "block";
            this.textContent = displayDetails ? "Show Details" : "Hide Details";
        })
    });
}