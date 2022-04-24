// CTA buttons

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

// Diplay featured items

const featuredImgOne = document.querySelector(".featured__img-one");
const featuredImgTwo = document.querySelector(".featured__img-two"); // For tablet display
const featuredImgThree = document.querySelector(".featured__img-three"); // For tablet display
const url =
  "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products/?featured=true&consumer_key=ck_41cdf63d0b609298abdf7f425d08441a7e856ee8&consumer_secret=cs_5cc06fad9c1601e20208e2b4905e630dde4c1af3";

async function getFeaturedItem() {
  const response = await fetch(url);
  const featuredItems = await response.json();

  featuredImgOne.innerHTML = "";
  featuredImgTwo.innerHTML = "";
  featuredImgThree.innerHTML = "";

  featuredImgOne.innerHTML = `<a href="/filmpage.html?id=${featuredItems[2].id}"><div class="featured__img featured__img-one" style="background-image: url(${featuredItems[2].images[0].src})"></div></a>
  <div class="overlay"><p>1h 45min | ${featuredItems[2].name}</p></div>`;
  featuredImgTwo.innerHTML = `<a href="/filmpage.html?id=${featuredItems[1].id}"><div class="featured__img featured__img-two" style="background-image: url(${featuredItems[1].images[0].src})"></div></a>
  <div class="overlay"><p>1h 45min | ${featuredItems[1].name}</p></div>`;
  featuredImgThree.innerHTML = `<a href="/filmpage.html?id=${featuredItems[0].id}"><div class="featured__img featured__img-three" style="background-image: url(${featuredItems[0].images[0].src})"></div></a>
  <div class="overlay"><p>1h 45min | ${featuredItems[0].name}</p></div>`;
}

getFeaturedItem();

// Getting category links

const categoryContainer = document.querySelector(".categories__section-container");
const baseUrl = "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products/categories";
const keys =
  "?consumer_key=ck_41cdf63d0b609298abdf7f425d08441a7e856ee8&consumer_secret=cs_5cc06fad9c1601e20208e2b4905e630dde4c1af3";
const categoryUrl = baseUrl + keys;

async function getCategoryLinks() {
  try {
    const response = await fetch(categoryUrl);
    const categories = await response.json();

    categoryContainer.innerHTML = "";

    for (let i = 0; i < categories.length; i++) {
      if (i === 4) {
        break;
      }
      categoryContainer.innerHTML += `<section class="categories__section">
                                          <a href="/search.html?id=${categories[i].id}"
                                            ><img
                                              src="${categories[i].image.src}"
                                              class="categories__img"
                                              alt="${categories[i].name}"
                                          /></a>
                                          <a href="/search.html?id=${categories[i].id}"><p class="categories__name">${categories[i].name}</p></a>
                                        </section>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getCategoryLinks();
