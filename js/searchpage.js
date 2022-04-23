// Getting category item using querystring id

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const categoryId = params.get("id");

const baseUrl = "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products/";
const keys =
  "consumer_key=ck_41cdf63d0b609298abdf7f425d08441a7e856ee8&consumer_secret=cs_5cc06fad9c1601e20208e2b4905e630dde4c1af3";
const categoryItemUrl = baseUrl + "?category=" + categoryId + "&" + keys;

const categoryResults = document.querySelector(".category__results");
const categoryContainer = document.querySelector(".categories__section-container");
const resultsHeadline = document.querySelector(".category__results-headline");

async function getCategoryItems() {
  const response = await fetch(categoryItemUrl);
  const categoryItem = await response.json();
  console.log(categoryItem);

  for (let i = 0; i < categoryItem.length; i++) {
    console.log(categoryItem[i].categories[0].name);
    resultsHeadline.innerHTML = `<h2>${categoryItem[i].categories[0].name}</h2>`;
    categoryResults.innerHTML += `<div class="projects__img">
                                        <a href="/filmpage.html?id=${categoryItem[i].id}"> <div class="featured__img projects__img" style="background-image: url(${categoryItem[i].images[0].src})"></div></a>
                                        <div class="overlay filmpage__overlay filmpage__project-overlay">
                                        <p>1h 45min | ${categoryItem[i].name}</p>
                                    </div>`;
  }
}

getCategoryItems();

// Displaying categories

const categoryUrl = baseUrl + "categories/?" + keys;

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

// Searching products

const searchResults = document.querySelector(".search__results");
const searchButton = document.querySelector(".search");
const searchInput = document.querySelector("#search");

async function searchItems(url) {
  const response = await fetch(url);
  const result = await response.json();

  for (let i = 0; i < result.length; i++) {
    searchResults.innerHTML += `<div class="projects__img">
                                        <a href="/filmpage.html?id=${result[i].id}"> <div class="featured__img projects__img" style="background-image: url(${result[i].images[0].src})"></div></a>
                                        <div class="overlay filmpage__overlay filmpage__project-overlay">
                                        <p>1h 45min | ${result[i].name}</p>
                                    </div>`;
  }
}

searchButton.onclick = function () {
  const input = searchInput.value;
  const newUrl = baseUrl + `?search=${input}` + "&" + keys;
  searchResults.innerHTML = "";
  searchItems(newUrl);
};
