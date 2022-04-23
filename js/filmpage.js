// Getting featured item using querystring id

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const key =
  "/?consumer_key=ck_41cdf63d0b609298abdf7f425d08441a7e856ee8&consumer_secret=cs_5cc06fad9c1601e20208e2b4905e630dde4c1af3";
const productUrl =
  "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products/" + id + key;

const filmPageImage = document.querySelector(".featured__filmpage");

async function getFeaturedImage() {
  try {
    const response = await fetch(productUrl);
    const featuredImage = await response.json();
    console.log(featuredImage);

    document.title = `${featuredImage.name}`;

    filmPageImage.innerHTML = `<div class="featured__img featured__img-filmpage" style="background-image: url(${featuredImage.images[0].src})"></div>
            <div class="overlay filmpage__overlay">
              <p>1h 45min | ${featuredImage.name}</p>
            </div>`;
  } catch (error) {
    console.log(error);
    filmPageImage.innerHTML = `<p>Error loading content</p>`;
  }
}

getFeaturedImage();

// Getting projects

const projectsContainer = document.querySelector(".projects__flex");
const projectsUrl = "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products/" + key;

async function getProducts() {
  try {
    const response = await fetch(projectsUrl);
    const projects = await response.json();
    console.log(projects);

    projectsContainer.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
      console.log(projects[i]);
      if (i === 2) {
        break;
      }

      projectsContainer.innerHTML += `<div class="projects__img">
                                        <a href="/filmpage.html?id=${projects[i].id}"> <div class="featured__img projects__img" style="background-image: url(${projects[i].images[0].src})"></div></a>
                                        <div class="overlay filmpage__overlay filmpage__project-overlay">
                                        <p>1h 45min | ${projects[i].name}</p>
                                    </div>`;
    }
  } catch (error) {
    console.log(error);
    projectsContainer.innerHTML = `<p>Error loading content</p>`;
  }
}
getProducts();
