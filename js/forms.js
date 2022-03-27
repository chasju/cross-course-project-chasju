const nameInput = document.querySelector("#name");
const cardInput = document.querySelector("#number");
const cvcInput = document.querySelector("#cvc");
const expDateInput = document.querySelector("#exp-date");

function successfulInput() {
  if (nameInput.value.trim().length) {
    nameInput.style.borderBottomColor = "green";
    nameInput.style.borderBottomWidth = "2px";
  } else {
    nameInput.style.borderColor = "red";
    nameInput.style.borderWidth = "2px";
  }

  if (checkLength(cardInput.value, 16)) {
    cardInput.style.borderColor = "green";
    cardInput.style.borderWidth = "2px";
  } else {
    cardInput.style.borderColor = "red";
    cardInput.style.borderWidth = "2px";
  }

  if (checkLength(expDateInput.value, 5)) {
    expDateInput.style.borderColor = "green";
    expDateInput.style.borderWidth = "2px";
  } else {
    expDateInput.style.borderColor = "red";
    expDateInput.style.borderWidth = "2px";
  }

  if (checkLength(cvcInput.value, 3)) {
    cvcInput.style.borderColor = "green";
    cvcInput.style.borderWidth = "2px";
  } else {
    cvcInput.style.borderColor = "red";
    cvcInput.style.borderWidth = "2px";
  }
}

nameInput.addEventListener("keyup", successfulInput);
cardInput.addEventListener("keyup", successfulInput);
cvcInput.addEventListener("keyup", successfulInput);
expDateInput.addEventListener("keyup", successfulInput);

const nameError = document.querySelector(".name__error");
const cardNumberError = document.querySelector(".cardnumber__error");
const expDateError = document.querySelector(".expdate__error");
const cvcError = document.querySelector(".cvc__error");
const form = document.querySelector("form");
const overlayContent = document.querySelector(".overlayhtml__flex");
const successMessage = document.querySelector(".success__message");

function submitSuccess(event) {
  event.preventDefault();

  if (nameInput.value.trim().length) {
    nameError.style.display = "none";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
    nameError.style.display = "block";
  }
  if (checkLength(cardInput.value, 16)) {
    cardNumberError.style.display = "none";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
    cardNumberError.style.display = "block";
  }
  if (checkLength(expDateInput.value, 5)) {
    expDateError.style.display = "none";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
    expDateError.style.display = "block";
  }
  if (checkLength(cvcInput.value, 3)) {
    cvcError.style.display = "none";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
    cvcError.style.display = "block";
  }

  submitSuccessMessage();
}

function submitSuccessMessage() {
  successMessage.innerHTML = `<div class="success"><a href="/filmpage.html"><p>Yay! Enjoy your film!</p><p class="play">PLAY</p>
            </a></div>`;
}

form.addEventListener("submit", submitSuccess);

function checkLength(value, length) {
  if (value.trim().length === length) {
    return true;
  } else {
    return false;
  }
}
