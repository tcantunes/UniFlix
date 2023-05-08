class View {
  constructor() {
    this.container = document.querySelector(".card-filmes");
    this.paginaPesquisa = document.querySelector(".filme-pesquisado");
  }
  update(model) {
    this.container.innerHTML += `
        <div class="filmes-container">
         <img class="filme-poster" src=${model.poster} onclick= "FilmeController.pesquisaPelaImagem('${model.titulo}')">
         <div class="titulo-av"> <p class="titulo">${model.titulo}</p> <p class="estrelas"><span>★</span>${model.avaliacoes[0].Value}</p></div>
         </div> 
         `;
  }

  atualizaPesquisa(model) {
    try {
      if (model.titulo === undefined)
        throw `<img class="imagem-de-erro" src=../img/error-404-1.png>`;
      
      // if (model.poster === "N/A")
      //   throw `<img class="imagem-de-erro" src=../img/error-404-1.png>`;

      let avaliacoes = ``;
      if (model.avaliacoes.length == 1) {
        avaliacoes = `<p class="infos"><span><span>★</span></span> ${model.avaliacoes[0].Value}</p>`;
      }
      if (model.avaliacoes.length == 2) {
        avaliacoes = `
            <p class="infos"><span>IMDB:</span> ${model.avaliacoes[0].Value}</p>
            <p class="infos"><span>Rotten Tomatoes:</span> ${model.avaliacoes[1].Value}</p>`;
      }
      if (model.avaliacoes.length == 3) {
        avaliacoes = `
            <p class="infos"><span>IMDB:</span> ${model.avaliacoes[0].Value}</p>
            <p class="infos"><span>Rotten Tomatoes:</span> ${model.avaliacoes[1].Value}</p>
            <p class="infos"><span>Metacritic:</span> ${model.avaliacoes[2].Value}</p>`;
      }

      this.paginaPesquisa.innerHTML = `

    <div class="grid-container">
    <div class="titulo-filme">
    <p class="infos"><span></span> ${model.titulo}</p>
    </div>
    <div class="primeiro-container">
    <picture>
    <img class="poster" src=${model.poster} alt="Imagem não encontrada">
    </picture>
    <p class="infos sino"><span></span> ${model.sinopse}</p>
    </div>
    <div class="segundo-container">
    <p class="infos"><span>Data de lançamento:</span> ${model.lancamento}</p>
    <p class="infos"><span>Duração:</span> ${model.duracao}</p>
    <p class="infos"><span>Gênero:</span> ${model.genero}</p>
    <p class="infos"><span>Diretor:</span> ${model.diretor}</p>
    <p class="infos"><span>Roteirista:</span> ${model.roteirista}</p>
    <p class="infos"><span>Atores:</span> ${model.atores}</p>
    <p class="infos"><span>Idioma:</span> ${model.idioma}</p>
    <p class="infos"><span>País:</span> ${model.pais}</p>
    <p class="infos"><span>Prêmios:</span> ${model.premios}</p>
    ${avaliacoes}
    </div>
    </div>
     `;
    } catch (e) {
      this.paginaPesquisa.innerHTML = `
        ${e}
        `;
    }
  }
}
