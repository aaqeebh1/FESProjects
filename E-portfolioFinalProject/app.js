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
     if(anime.episodes === null){
      return `
        <div class="result__card">
        <a href="${anime.url}" class="anime__img" target="_blank">
          <img src="${anime.images.jpg.image_url}" alt="" class="anime__img" />
          </a>
          <h5 class="anime__card--title">${anime.title}</h5>
          <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
          <p class="anime__card--episodes"><span class="span-bold">Episodes:</span> Ongoing</p>          
          <p class="anime__card--realese"><span class="span-bold">Release Date:</span> ${anime.year}</p>          
          <p class="anime__card--rating"><span class="span-bold">Rating:</span> ${anime.rating}</p>
        </div>`;
    }
    else if (anime.type === 'TV' && anime.title === anime.title && anime.synopsis !== null) {
    return `
        <div class="result__card">
        <a href="${anime.url}" class="anime__img" target="_blank">
          <img src="${anime.images.jpg.image_url}" alt="" class="anime__img" />
          </a>
          <h5 class="anime__card--title">${anime.title}</h5>
          <p class="anime__card--para">${anime.synopsis.slice(0, 150)}</p>
          <p class="anime__card--episodes"><span class="span-bold">Episodes:</span> ${anime.episodes}</p>          
          <p class="anime__card--realese"><span class="span-bold">Release Date:</span> ${anime.year}</p>          
          <p class="anime__card--rating"><span class="span-bold">Rating:</span> ${anime.rating}</p>
        </div>`;}
        
  }).join("");

}


function pageLoaded() {
  const form = document.getElementById("search__input");
  form.addEventListener("submit", searchAnime);
}

window.addEventListener("load", pageLoaded);
