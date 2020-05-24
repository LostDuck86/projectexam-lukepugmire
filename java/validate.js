// JavaScript Document
const form = document.querySelector("#contact-form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("ANNNNNNNNNND Its Gone!");


    const firstName = document.querySelector("#firstname");
    const firstNameError = document.querySelector("#firstname-error");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }


    const lastName = document.querySelector("#lastname");
    const lastNameError = document.querySelector("#lastname-error");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#email-error");
    const invalidEmail = document.querySelector("#email-format-error")
    const emailValue = email.value;

    if (validateEmail(emailValue) === true) {
        invalidEmail.style.display = "none";
    } else {
        invalidEmail.style.display = "block";
    }
    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        invalidEmail.style.display = "none";
    }


    const textArea = document.querySelector("#textarea");
    const textAreaError = document.querySelector("#texterror");
    const textAreaValue = textArea.value;

    if (textAreaLength(textAreaValue) === true) {
        textAreaError.style.display = "none";
    } else {
        textAreaError.style.display = "block";
    }


}


function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function textAreaLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 4) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
