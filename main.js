const requestURL = "../json/mangas.json";

const backgrounds = [
    '../images/blame_bg.png',
    '../images/berserk_bg.png',
    '../images/vagabond_bg.png',
    '../images/monster_bg.png',
    '../images/gantz_bg.png'
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
            
            <div class="card mb-3 mt-10 text-end fixed-center-card" style="background-color: #6e1822; color:#ffffff;  max-width: 900px; display: none;" id="manga-${id}">
                <div class="row g-0">
                    <div class="col-md-8 d-flex flex-column">
                        <div class="card-body flex-grow-1 d-flex flex-column">
                            <h1 class="card-title card_title" style="font-size: 55px"><b>${title}</b></h1>
                            <p class="card-text card_genre">${genre}</p>
                            <p class="card-title mb-4 card_tomes"><span class="h5 card_year">${year}</span> | ${nTomes} tomes</p>
                            <h4 class="card-title mb-4 card_mangaka">${mangaka}</h4>
                            <p class="card-text card_edition">${edition}</p>
                            <p class="card-text align-self-center card_description" style="font-size: 18px">${description}</p>
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


    $(".img-manga").on("click", function () {
        const selectedContainer = $(this).closest(".manga-container");
        const selectedCard = selectedContainer.find(".card");
        const otherContainers = $(".manga-container").not(selectedContainer);
        const index = selectedContainer.index();

        selectedContainer.css("order", "-1");

        otherContainers.find(".img-manga, .card").hide();

        window.scrollTo(0, 0);

        $(this).hide();
        selectedContainer.addClass("active"); 
        selectedCard.show();

        $("body").css({
            "background-image": `url(${backgrounds[index]})`,
            "background-size": "100% 100%",
            "background-repeat": "no-repeat",
            "z-index": "0"
        });
    });

    $(".img-card").on("click", function () {
        const selectedContainer = $(this).closest(".manga-container");

        selectedContainer.css("order", "0");

        $(".manga-container").removeClass("active");
        $(".img-manga").show();
        $(".card").hide();
        
        $("body").css({
            "background-image": "url('../images/default_background.jpg')",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "z-index": "0"
        });
    });
});