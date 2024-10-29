const requestURL = '../json/mangas.json';

// función asíncrona

async function fetchMangasJson(){
    const response = await fetch(requestURL);
    const mangas = await response.json();
    return mangas;
}

fetchMangasJson().then(m => {
    for (let index = 0; index < m.mangas.length; index++) {
        const mangasSection = document.getElementById('mangaSection');

        /* "id": 1,
        "frontPage": "../images/blame.jpeg",
        "title": "BLAME!",
        "year": "1996",
        "state": "Finished",
        "genre": "Cyberpunk, Action, Sci-Fi",
        "edition": "Panini's MASTER EDITION",
        "nTomes": "6",
        "mangaka": "Tsutomu Nihei",
        "description": */

        let id = m.mangas[index].id;
        let frontPage = m.mangas[index].frontPage;
        let title = m.mangas[index].title;
        let year = m.mangas[index].year;
        let state = m.mangas[index].state;
        let genre = m.mangas[index].genre;
        let edition = m.mangas[index].state;
        let nTomes = m.mangas[index].nTomes;
        let mangaka = m.mangas[index].mangaka;
        let description = m.mangas[index].description;

        mangasSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${frontPage}" class="card-img-top" alt="manga cover">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-title"><span class="h6">${year}</span> . ${nTomes}</p>
            <h6 class="card-title mb-4">${mangaka}</h6>
            <p class="card-text">${description}</p>
            </div>
        </div>
        `
    }
})