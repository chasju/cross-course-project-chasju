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

const featuredImgOne = document.querySelector(".featured__img-one");
const featuredImgTwo = document.querySelector(".featured__img-two");
const featuredImgThree = document.querySelector(".featured__img-three");
const url =
  "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products?consumer_key=ck_41cdf63d0b609298abdf7f425d08441a7e856ee8&consumer_secret=cs_5cc06fad9c1601e20208e2b4905e630dde4c1af3";

async function getFeaturedimg() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    console.log(products);

    products.forEach(function (product) {
      const isFeatured = product.featured;
      console.log(product);

      if (isFeatured) {
        featuredImgOne.innerHTML = `<a href="/filmpage.html"><div class="featured__img featured__img-one" style="background-image: url(${product.images[0].src})"</div></a>`;
        featuredImgTwo.innerHTML = `<a href="/filmpage.html"><div class="featured__img featured__img-one" style="background-image: url(${product.images[0].src})"</div></a>`;
        featuredImgThree.innerHTML = `<a href="/filmpage.html"><div class="featured__img featured__img-one" style="background-image: url(${product.images[0].src})"</div></a>`;
        console.log(isFeatured);
      } else {
        featuredImgOne.innerHTML = "<p>error</p>";
      }
    });
  } catch (error) {
    console.log(error);
  }
}

getFeaturedimg();
