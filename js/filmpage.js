// Getting featured item using querystring id

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const key =
  "/?consumer_key=ck_41cdf63d0b609298abdf7f425d08441a7e856ee8&consumer_secret=cs_5cc06fad9c1601e20208e2b4905e630dde4c1af3";
const productUrl =
  "https://chasju.online/cross-course/index.php/wp-json/wc/v3/products/" + id + key;

const filmPageImage = document.querySelector(".featured__filmpage");
const filmPageInfo = document.querySelector(".filmpage__profile");

async function getFeaturedImage() {
  try {
    const response = await fetch(productUrl);
    const featuredImage = await response.json();

    document.title = `${featuredImage.name}`;

    filmPageImage.innerHTML = `<div class="featured__img featured__img-filmpage" style="background-image: url(${featuredImage.images[0].src})"></div>
            <div class="overlay filmpage__overlay">
              <p>1h 45min | ${featuredImage.name}</p>
            </div>`;

    filmPageInfo.innerHTML = `<h3>Description</h3><div class="featured__description">
                            ${featuredImage.description}</div>
                            <img
                            src="/images/resized/ian-dooley-.jpg"
                            class="profile__img filmpage__profile-img"
                            alt="profile image of Brad Pitt"
                        />
                        <h2 class="name filmpage__name">Brad Pitt</h2>
                        <p class="age filmpage__age">Age 27</p>
                        <p class="bio">
                            You look down, they know you’re lying and up, they know you don’t know the truth. Don’t
                            use seven words when four will do. Don’t shift your weight, look always at your mark but
                            don’t stare, be specific but not memorable, be funny but don’t make him laugh.
                        </p>`;
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

    projectsContainer.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
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
