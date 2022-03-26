const buyNowButton = document.querySelector("#ctaBuy");
const payPerViewButton = document.querySelector("#ctaPpv");
const purchaseForm = document.querySelector(".overlayhtml__section");

function buyNow() {
  purchaseForm.style.display = "block";
}

function payPerView() {
  purchaseForm.style.display = "block";
}

buyNowButton.addEventListener("click", buyNow);
payPerViewButton.addEventListener("click", payPerView);

const nameInput = document.querySelector("#name");
const cardInput = document.querySelector("#number");
const cvcInput = document.querySelector("#cvc");
const expDateInput = document.querySelector("#exp-date");

function successfulInput() {
  if (nameInput.value.trim().length) {
    nameInput.style.borderColor = "green";
    nameInput.style.borderWidth = "2px";
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

function checkLength(value, length) {
  if (value.trim().length === length) {
    return true;
  } else {
    return false;
  }
}
