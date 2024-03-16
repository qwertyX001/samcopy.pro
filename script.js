document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

function validateForm(e) {
    e.preventDefault();
    const nameInput = document.querySelector("input[name='name']");
    const emailInput = document.querySelector("input[name='email']");
    const messageInput = document.querySelector("textarea[name='message']");
    let isValid = true;

    if (nameInput.value.trim() === "") {
        setError(nameInput, "Please enter your name.");
        isValid = false;
    } else {
        removeError(nameInput);
    }

    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
        setError(emailInput, "Please enter a valid email address.");
        isValid = false;
    } else {
        removeError(emailInput);
    }

    if (messageInput.value.trim() === "") {
        setError(messageInput, "Please enter a message.");
        isValid = false;
    } else {
        removeError(messageInput);
    }

    if (isValid) {
        // Submit the form (you can handle form submission here)
        alert("Form submitted successfully!");
        form.reset();
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector("small");
    errorMessage.innerText = message;
    formControl.classList.add("error");
}

function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
}

function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
