const email = document.querySelector("#email");
const password = document.querySelector("#password");

function successfulInput() {
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
}

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

email.addEventListener("keyup", successfulInput);
password.addEventListener("keyup", successfulInput);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
