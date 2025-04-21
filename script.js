const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const projectButtons = document.querySelectorAll(".show-btn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const submitMessage = document.getElementById("submitMessage");

document.addEventListener("DOMContentLoaded", function () {
  projectToggle();
  formValidation();
  liveFormValidation();
  setupDarkMode();
  setupSmoothScroll();
  new Typed("#typed-text", {
    strings: ["a Student.", "a Gamer.", "a Foodie.", "a Web Developer."],
    typeSpeed: 40,
    showCursor: false,
    startDelay: 250,
  });
});

function projectToggle() {
  projectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let details = this.nextElementSibling;
      let displayDetails = details.style.display === "block";
      details.style.display = displayDetails ? "none" : "block";
      this.textContent = displayDetails ? "Show Details" : "Hide Details";
    });
  });
}

function formValidation() {
  form.addEventListener("submit", function (event) {
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
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = "Invalid email format.";
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }

    if (isValid) {
      console.log("Form Submitted!");

      let submitButton = form.querySelector("button[type='submit'");
      submitButton.disabled = true;

      submitMessage.textContent = "Your message has been sent! ✅";
      setTimeout(() => {
        form.reset();
        submitMessage.textContent = "";
        submitButton.disabled = false;
      }, 5000);
    }

    event.preventDefault();
  });
}

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email));
}

function liveFormValidation() {
  nameInput.addEventListener("input", () => (nameError.textContent = ""));
  emailInput.addEventListener("input", () => (emailError.textContent = ""));
  messageInput.addEventListener("input", () => (messageError.textContent = ""));
}

function setupDarkMode() {
  const toggleSwitch = document.querySelector("#checkbox");
  const currentTheme = localStorage.getItem("theme");

  // Sets the theme based on local storage/system preference
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
    localStorage.setItem("theme", "dark");
  }

  toggleSwitch.addEventListener("change", function (e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth",
        });
      }
    });
  });
}
