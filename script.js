const containerVideos = document.querySelector(".videos_container")

//busca a API
async function buscarEmostrarVideos(params) {
    try {
        const busca = await fetch("http://localhost:3000/videos")
        const videos = await busca.json();
            videos.forEach((video) => {
                containerVideos.innerHTML += `
                <li class="videos_item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                            <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                    </div>
                </li>
                `;
            })
    } catch (error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
    }
}

buscarEmostrarVideos();

//Filtrar videos na barra de pesquisa
const barraDePesquisa = document.querySelector(".pesquisar_input")

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos_item");

    if (barraDePesquisa.value != ""){
        for (let video of videos) {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase()
            let valorFiltro = barraDePesquisa.value.toLowerCase()

            if(!titulo.includes(valorFiltro)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        }
    } else {
        video.style.display = "block";
    }
}