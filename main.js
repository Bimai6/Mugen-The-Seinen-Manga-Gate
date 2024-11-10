const requestURL = "../json/mangas.json";

const backgrounds = [
    '../images/blame_bg.png',
    '../images/berserk_bg.png',
    '../images/vagabond_bg.png',
    '../images/monster_bg.png',
    '../images/gantz_bg.png',
    '../images/20thcenturyboys_bg.png',
    '../images/ajin_bg.png',
    '../images/inuyashiki_bg.png',
    '../images/akira_bg.png',
    '../images/punpun_bg.png',
    '../images/blacklagoon_bg.png',
    '../images/pluto_bg.png'
];

async function fetchMangasJson() {
    const response = await fetch(requestURL);
    const mangas = await response.json();
    return mangas;
}

fetchMangasJson().then((m) => {
    const mangaSection = document.getElementById("mangaSection");

    for (let index = 0; index < m.mangas.length; index++) {
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
        <div class="manga-container" style="display: flex; flex-direction: column;">
            <img src="${frontPage}" class="img-fluid p-2 img-manga" alt="Manga Cover">
            
            <div class="card mb-3 mt-10 text-end fixed-center-card" style="background-color: #6e1822; color:#ffffff; max-width: 900px; display: none;" id="manga-${id}">
                <div class="row g-0">
                    <div class="col-md-8 d-flex flex-column">
                        <div class="card-body flex-grow-1 d-flex flex-column">
                            <h1 class="card-title card_title" style="font-size: 55px"><b>${title}</b></h1>
                            <p class="card-text card_genre">${genre}</p>
                            <p class="card-title mb-4 card_tomes"><span class="h5 card_year">${year}</span> | ${nTomes} tomes</p>
                            <h4 class="card-title mb-4 card_mangaka">${mangaka}</h4>
                            <p class="card-text card_edition">${edition}</p>
                            <p class="card-text align-self-center card_description" style="font-size: 18px">${description}</p>
                            <div class="mt-auto">
                                <p class="card-text card_state">${state}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-flex justify-content-center align-items-center" style="max-width:100%; max-height:100%">
                            <img src="${frontPage}" class="img-fluid p-2 img-card" alt="Manga Cover">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    document.querySelectorAll(".img-manga").forEach((imgManga, index) => {
        imgManga.addEventListener("click", function () {
            const selectedContainer = imgManga.closest(".manga-container");
            const selectedCard = selectedContainer.querySelector(".card");
            const otherContainers = document.querySelectorAll(".manga-container:not(.active)");

            selectedContainer.style.order = "-1";

            otherContainers.forEach((container) => {
                const img = container.querySelector(".img-manga");
                const card = container.querySelector(".card");
                if (img) img.style.display = "none";
                if (card) card.style.display = "none";
            });

            window.scrollTo(0, 0);

            imgManga.style.display = "none";
            selectedContainer.classList.add("active");
            selectedCard.style.display = "block";

            document.body.style.backgroundImage = `url(${backgrounds[index]})`;
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.zIndex = "0";
        });
    });

    document.querySelectorAll(".img-card").forEach((imgCard) => {
        imgCard.addEventListener("click", function () {
            const selectedContainer = imgCard.closest(".manga-container");

            selectedContainer.style.order = "0";

            document.querySelectorAll(".manga-container").forEach((container) => {
                container.classList.remove("active");
                const img = container.querySelector(".img-manga");
                const card = container.querySelector(".card");
                if (img) img.style.display = "block";
                if (card) card.style.display = "none";
            });

            document.body.style.backgroundImage = "url('../images/default_background.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.zIndex = "0";
        });
    });

    const textStates = document.querySelectorAll('.card_state');
    textStates.forEach((textState) => {
        textState.addEventListener("mouseover", () => {
            if (textState.innerText.includes("Ongoing")) {
                textState.style.color = "#00FF00";
            } else if (textState.innerText.includes("Hiatus")) {
                textState.style.color = "#FFFF00";
            } else {
                textState.style.color = "#FF0000";
            }
        });
        
        textState.addEventListener("mouseout", () => {
            textState.style.color = "#FFFFFF";
        });
    });
});