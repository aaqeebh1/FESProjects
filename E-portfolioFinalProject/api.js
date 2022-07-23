
let titleMapped =[]

async function getAnime() {
    const temp = await fetch(`https://api.jikan.moe/v4/anime`)
    .then(res => res.json())    
    
    titleMapped.push(temp.data.map(elem => elem.title))
}

getAnime()

const searchBar = document.getElementById('search__input')
