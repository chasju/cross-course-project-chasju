const featuredImgProfile = document.querySelector(".featured__img-profile");
const url =
  "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products/?featured=true&consumer_key=ck_41cdf63d0b609298abdf7f425d08441a7e856ee8&consumer_secret=cs_5cc06fad9c1601e20208e2b4905e630dde4c1af3";

async function getFeaturedItem() {
  const response = await fetch(url);
  const featuredItems = await response.json();

  featuredImgProfile.innerHTML = "";

  featuredImgProfile.innerHTML = `<a href="/filmpage.html?id=${featuredItems[2].id}"><div class="featured__img featured__img-profile" style="background-image: url(${featuredItems[2].images[0].src})"></div></a>
  <div class="overlay"><p>1h 45min | ${featuredItems[2].name}</p></div>`;
}

getFeaturedItem();
