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
