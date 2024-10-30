const requestURL = "../json/mangas.json";

// función asíncrona
async function fetchMangasJson() {
  const response = await fetch(requestURL);
  const mangas = await response.json();
  return mangas;
}

fetchMangasJson().then((m) => {
  const mangaSection = document.getElementById("mangaSection");

  for (let index = 0; index < m.mangas.length; index++) {
    let id = m.mangas[index].id;
    let frontPage = m.mangas[index].frontPage; // Imagen base
    let title = m.mangas[index].title;
    let year = m.mangas[index].year;
    let state = m.mangas[index].state;
    let genre = m.mangas[index].genre;
    let edition = m.mangas[index].edition;
    let nTomes = m.mangas[index].nTomes;
    let mangaka = m.mangas[index].mangaka;
    let description = m.mangas[index].description;

    // Agregar solo la imagen inicial y el contenedor de la carta
    mangaSection.innerHTML += `
    <div class="manga-container">
        <!-- Esta es imagen base -->
        <img src="${frontPage}" class="img-fluid p-2 img-manga" alt="Manga Cover"> <!-- Imagen base --> 
        
        <div class="card mb-3 text-end" style="background-color: red; color:#ffffff; max-width: 900px; display: none;" id="manga-${id}">
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
                    <div class="d-flex justify-content-center align-items-center" style="max-width:100%; max-height:100%">
                        <!-- Esta es imagen carta -->
                        <img src="${frontPage}" class="img-fluid p-2 img-card" alt="Manga Cover"> <!-- Imagen en la carta --> 
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
  }

  // Lógica para mostrar la carta y ocultar el resto
$(".img-manga").on("click", function () {
    const selectedContainer = $(this).closest(".manga-container");
    const selectedCard = selectedContainer.find(".card");
    const otherContainers = $(".manga-container").not(selectedContainer); // Selecciona los demás contenedores

    // Oculta las imágenes base y cartas en otros contenedores
    otherContainers.find(".img-manga, .card").hide(); 
    $(this).hide(); // Oculta la imagen base del contenedor seleccionado
    selectedCard.show(); // Muestra la carta seleccionada
});

// Lógica para volver al estado anterior
$(".img-card").on("click", function () {
    const selectedCard = $(this).closest(".card");
    const selectedContainer = selectedCard.closest(".manga-container");

    // Muestra solo las imágenes base de todos los contenedores y oculta todas las cartas
    $(".manga-container .img-manga").show(); // Muestra las imágenes base en todos los contenedores
    $(".manga-container .card").hide(); // Oculta todas las cartas
});


});
