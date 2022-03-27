const firstName = document.querySelector("#first__name");
const lastName = document.querySelector("#last__name");
const occupation = document.querySelector("#occupation");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat__password");

function successfulInput() {
  if (firstName.value.trim().length) {
    firstName.style.borderBottomColor = "green";
    firstName.style.borderBottomWidth = "2px";
  } else {
    firstName.style.borderColor = "red";
    firstName.style.borderWidth = "2px";
  }

  if (lastName.value.trim().length) {
    lastName.style.borderColor = "green";
    lastName.style.borderWidth = "2px";
  } else {
    lastName.style.borderColor = "red";
    lastName.style.borderWidth = "2px";
  }

  if (occupation.value.trim().length) {
    occupation.style.borderColor = "green";
    occupation.style.borderWidth = "2px";
  } else {
    occupation.style.borderColor = "red";
    occupation.style.borderWidth = "2px";
  }

  if (validateEmail(email.value)) {
    email.style.borderColor = "green";
    email.style.borderWidth = "2px";
  } else {
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
  }

  if (checkLength(password.value, 7)) {
    password.style.borderColor = "green";
    password.style.borderWidth = "2px";
  } else {
    password.style.borderColor = "red";
    password.style.borderWidth = "2px";
  }

  if (repeatPassword.value === password.value) {
    repeatPassword.style.borderColor = "green";
    repeatPassword.style.borderWidth = "2px";
  } else {
    repeatPassword.style.borderColor = "red";
    repeatPassword.style.borderWidth = "2px";
  }
}

firstName.addEventListener("keyup", successfulInput);
lastName.addEventListener("keyup", successfulInput);
occupation.addEventListener("keyup", successfulInput);
email.addEventListener("keyup", successfulInput);
password.addEventListener("keyup", successfulInput);
repeatPassword.addEventListener("keyup", successfulInput);

// const agreeCheckbox = document.querySelector(".agree");

// I tried this, but javascript isn't detecting when the checkbox is checked or not...

// button.disabled = true;

// if (agreeCheckbox.checked) {
//   button.disabled = false;
// }

function checkLength(value, length) {
  if (value.trim().length > length) {
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
