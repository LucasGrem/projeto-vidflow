const containerVideos = document.querySelector(".videos_container")

//busca a API
const api = fetch("http://localhost:3000/videos")
.then(res => res.json())
.then((videos) =>
    videos.forEach(video => {
        containerVideos.innerHTML += `
        <li class="videos_item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `
    })
)
.catch((error) => {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`
})