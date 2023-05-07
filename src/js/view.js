class View {
  constructor() {
    this.container = document.querySelector(".card-filmes");
  }
  update(model) {
    this.container.innerHTML += `
        <div class="filmes-container">
        <p class="titulo">${model.titulo} <span class="estrelas">⭐${model.avaliacoes[0].Value}</span></p>
         <img class="filme-poster" src=${model.poster} onclick= "FilmController.buscaFilmeImg('${model.title}')">
         </div> 
         `;
  }
}
