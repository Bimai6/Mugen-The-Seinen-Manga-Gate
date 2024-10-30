const requestURL = "../json/mangas.json";

// función asíncrona

async function fetchMangasJson() {
  const response = await fetch(requestURL);
  const mangas = await response.json();
  return mangas;
}

fetchMangasJson().then((m) => {
  for (let index = 0; index < m.mangas.length; index++) {
    const mangasSection = document.getElementById("mangaSection");

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
    let edition = m.mangas[index].edition;
    let nTomes = m.mangas[index].nTomes;
    let mangaka = m.mangas[index].mangaka;
    let description = m.mangas[index].description;

    mangaSection.innerHTML += `
    <div class="card mb-3 text-end" style="background-color: red; color:#ffffff; max-width: 900px">
        <div class="row g-0">
            <div class="col-md-8 d-flex flex-column">
                <div class="card-body flex-grow-1 d-flex flex-column">
                    <h2 class="card-title"><b>${title}</b></h2>
                    <p class="card-text">${genre}</p>
                    <p class="card-title mb-4"><span class="h5">${year}</span> | ${nTomes} tomes</p>
                    <h4 class="card-title mb-4">${mangaka}</h4>
                    <p class="card-text">${edition}</p>
                    <p class="card-text" style="font-size: 18px">${description}</p>
                    <div class="mt-auto">
                        <p class="card-text">${state}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class "d-flex justify-content-center align-items-center" style="max-width:100%; max-height:100%">
                    <img src="${frontPage}" class="img-fluid p-2" alt="Manga Cover">
                </div>
            </div>
        </div>
    </div>
`;
  }
});
