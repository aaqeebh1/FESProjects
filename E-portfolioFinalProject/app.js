const base_url = "https://api.jikan.moe/v4";
const loadingBar = document.querySelector("#loading__bar--base");
const loadingSpinner = document.querySelector("#results__loading--wrapper");
const topAnime = document.querySelector("#top__anime");
const mostPopularAnime = document.querySelector("#most__popular");
const animeDropdown = document.querySelector("#results__filter");
const latestAnime = document.querySelector("#latest");
const searchBar = document.querySelector(".header__search")


const toggleButton = document.querySelector(".toggle__btn")
const navLinks = document.querySelector(".nav__links")

const navLink = document.querySelector(".nav__link")

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle("active")

  if(navLinks.classList.contains("active")) {
    searchBar.style.opacity = "0"
  }else if (!navLinks.classList.contains("active")){
    hideMenu()
  }

})

const hideMenu = () => {
  if (navLinks.classList.contains("active"))
 {
  navLinks.classList.remove("active")
  searchBar.style.opacity = "1"
 }}

function searchAnime(event) {
  event.preventDefault();
  const form = new FormData(this);
  const query = form.get("search");

  fetch(`${base_url}/anime?q=${query}&type=TV`)
    .then((res) => res.json())
    .then(updateDOM)
    .catch((err) => console.warn(err.message));
}

const loadingDOM = () => {
  loadingBar.classList += " visible";
  loadingSpinner.classList += " visible";
};

const removeloadingDOM = () => {
  loadingBar.classList.remove("visible");
  loadingSpinner.classList.remove("visible");
};

const titleVisibilty = () => {
  const searchResultsTitle = document.getElementById("results__title--wrapper");
  searchResultsTitle.classList += " visible";
};

const updateDOM = (data) => {
  loadingDOM();

  setTimeout(() => {
    removeloadingDOM();

    titleVisibilty();

    const searchResults = document.getElementById("search__results");
    searchResults.innerHTML = data.data.slice(0, 9)
      .map((anime) => {
        if (anime.episodes === null) {
          return `
          <div class="result__card">
          <a href="${anime.url}" target="_blank">
            <img src="${
              anime.images.jpg.image_url
            }" alt="" class="anime__img" />
            
            <h5 class="anime__card--title">${anime.title}</h5>
            <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
            <p class="anime__card--episodes"><span class="span-bold">Episodes:</span> Ongoing</p>          
            <p class="anime__card--realese"><span class="span-bold">Release Date:</span> ${
              anime.year
            }</p>          
            <p class="anime__card--rating"><span class="span-bold">Rating:</span> ${
              anime.rating
            }</p>
            </a>
          </div>`;
        } else if (
          anime.title === anime.title &&
          anime.synopsis !== null
        ) {
          return `
          <div class="result__card">
          <a href="${anime.url}" target="_blank">
            <img src="${
              anime.images.jpg.image_url
            }" alt="" class="anime__img" />
            
            <h5 class="anime__card--title">${anime.title}</h5>
            <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
            <p class="anime__card--episodes"><span class="span-bold">Episodes:</span> ${
              anime.episodes
            }</p>          
            <p class="anime__card--realese"><span class="span-bold">Release Date:</span> ${
              anime.year
            }</p>          
            <p cl
            ass="anime__card--rating"><span class="span-bold">Rating:</span> ${
              anime.rating
            }</p>
            </a>
          </div>`;
        }
      })
      .join("");
  }, 1500);
};

const topSixDOM = (data) => {
  loadingDOM();

  setTimeout(() => {
    removeloadingDOM();

    titleVisibilty();

    const searchResults = document.getElementById("search__results");
    searchResults.innerHTML = data.data
      .slice(0, 6)
      .map((anime) => {
        if (anime.episodes === null) {
          return `
          <div class="result__card">
          <a href="${anime.url}" target="_blank">
            <img src="${
              anime.images.jpg.image_url
            }" alt="" class="anime__img" />
            
            <h5 class="anime__card--title">${anime.title}</h5>
            <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
            <p class="anime__card--episodes"><span class="span-bold">Episodes:</span> Ongoing</p>          
            <p class="anime__card--realese"><span class="span-bold">Release Date:</span> ${
              anime.year
            }</p>          
            <p class="anime__card--rating"><span class="span-bold">Rating:</span> ${
              anime.rating
            }</p>
            </a>
          </div>`;
        } else if (
          anime.title === anime.title &&
          anime.synopsis !== null
        ) {
          return `
          <div class="result__card">
          <a href="${anime.url}" target="_blank">
            <img src="${
              anime.images.jpg.image_url
            }" alt="" class="anime__img" />
            
            <h5 class="anime__card--title">${anime.title}</h5>
            <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
            <p class="anime__card--episodes"><span class="span-bold">Episodes:</span> ${
              anime.episodes
            }</p>          
            <p class="anime__card--realese"><span class="span-bold">Release Date:</span> ${
              anime.year
            }</p>          
            <p class="anime__card--rating"><span class="span-bold">Rating:</span> ${
              anime.rating
            }</p>
            </a>
          </div>`;
        }
      })
      .join("");
  }, 1500);
};

const latesSixDOM = (data) => {
  loadingDOM();

  setTimeout(() => {
    removeloadingDOM();

    titleVisibilty();

    const searchResults = document.getElementById("search__results");
    searchResults.innerHTML = data.data
      .slice(0, 23)
      .map((anime) => {
        if (
          anime.episodes === null &&
          anime.synopsis === null &&
          anime.aired.from === null
        ) {
          return;
        } else if (
          anime.type === "TV" &&
          anime.title === anime.title &&
          anime.synopsis !== null
        ) {
          return `
          <div class="result__card">
          <a href="${anime.url}" target="_blank">
            <img src="${
              anime.images.jpg.image_url
            }" alt="" class="anime__img" />
            
            <h5 class="anime__card--title">${anime.title}</h5>
            <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
            <p class="anime__card--episodes"><span class="span-bold">Episodes:</span> ${
              anime.episodes
            }</p>          
            <p class="anime__card--realese"><span class="span-bold">Release Date:</span> ${
              anime.year
            }</p>          
            <p class="anime__card--rating"><span class="span-bold">Rating:</span> ${
              anime.rating
            }</p>
            </a>
          </div>`;
        }
      })
      .join("");
  }, 1500);
};

const dropDownSelector = () => {
  let url = "";
  if (animeDropdown.value === "TOP_RATED") {
    url = `${base_url}/top/anime`;
    fetch(url)
      .then((res) => res.json())
      .then(topSixDOM)
      .catch((err) => console.log(err.message));
  } else if (animeDropdown.value === "MOST_POPULAR") {
    url = `${base_url}/top/anime?filter=bypopularity`;
    fetch(url)
      .then((res) => res.json())
      .then(topSixDOM)
      .catch((err) => console.log(err.message));
  } else if (animeDropdown.value === "LATEST") {
    url = `${base_url}/anime?order_by=start_date&sort=asc`;
    fetch(url)
      .then((res) => res.json())
      .then(latesSixDOM)
      .catch((err) => console.log(err.message));
  }
};

const getTopAnime = () => {
  event.preventDefault();

  fetch(`${base_url}/top/anime`)
    .then((res) => res.json())
    .then(topSixDOM)
    .catch((err) => console.log(err.message));
};

const getMostPopularAnime = () => {
  event.preventDefault();

  fetch(`${base_url}/top/anime?filter=bypopularity`)
    .then((res) => res.json())
    .then(topSixDOM)
    .catch((err) => console.log(err.message));
};

topAnime.addEventListener("click", getTopAnime);
latest.addEventListener("click", () => {
  event.preventDefault()
  fetch(`${base_url}/anime?order_by=start_date&sort=asc`)
    .then((res) => res.json())
    .then(latesSixDOM)
    .catch((err) => console.log(err.message));
});

mostPopularAnime.addEventListener("click", getMostPopularAnime);

animeDropdown.addEventListener("change", dropDownSelector);

const pageLoaded = () => {
  const form = document.getElementById("search__input");
  form.addEventListener("submit", searchAnime);
};

window.addEventListener("load", pageLoaded);
