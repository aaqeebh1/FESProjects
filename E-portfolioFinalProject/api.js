const base_url = "https://api.jikan.moe/v4/anime";

function searchAnime(event) {
  event.preventDefault();

  const form = new FormData(this);
  const query = form.get("search");

  fetch(`${base_url}?q=${query}`)
    .then((res) => res.json())
    .then(updateDOM)
    .catch((err) => console.warn(err.message));
}

function updateDOM(data) {
  const searchResults = document.getElementById("search__results");
  searchResults.innerHTML = data.data
  .map((anime) => {

    if (anime.type === 'TV' && anime.title === anime.title && anime.synopsis !== null) {
    return `
        <div class="result__card">
          <img src="${anime.images.jpg.image_url}" alt="" class="anime__img" />
          <h5 class="anime__card--title">${anime.title}</h5>
          <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
          <h5 class"anime__card--episodes">${anime.episodes}</h5>          
          <h5 class"anime__card--realese">${anime.year}</h5>          
          <h5 class="anime__card--rating">${anime.rating}</h5>
        </div>`;}
  }).join("");

}


function pageLoaded() {
  const form = document.getElementById("search__input");
  form.addEventListener("submit", searchAnime);
}

window.addEventListener("load", pageLoaded);
