class FilmeController {
  static exibeFilme() {
    let filmes = [
      "Black Widow",
      "Joker",
      "City by the Sea",
      "Les Misérables",
      "Gone Girl",
      "Twilight",
      "Home Alone",
      "Now You See Me",
      "Saw",
      "50 First Dates",
      "The Tuxedo",
      "The Departed",
      "Despicable Me",
      "Enemy At The Gates",
      "Final Destination",
      "Epic Movie"
    ];
    for (let filme of filmes) {
      let model = new FilmeModel();
      model.requisicao(filme, () => {
        let view = new View();
        view.update(model);
      });
    }
  }

  static encaminhaPesquisa() {
    localStorage.setItem(
      "filmePaginaPesquisa",
      document.getElementById("pesquisa").value
    );
    location.href = "./src/paginas/pesquisa.html";
  }

  static barraPesquisa() {
    let model = new FilmeModel();
    model.requisicao(localStorage.getItem("filmePaginaPesquisa"), () => {
      let view = new View();
      view.atualizaPesquisa(model);
    });
  }

  static botaoPesquisa() {
    localStorage.setItem(
      "filmePaginaPesquisa",
      document.getElementById("pesquisa").value
    );
    location.href = "pesquisa.html";
  }

  static pesquisaPelaImagem(filme) {
    localStorage.setItem("filmePaginaPesquisa", filme);
    location.href = "./src/paginas/pesquisa.html";
  }
}
document.querySelector("#formBarra").addEventListener("submit", (event) => {
  event.preventDefault();
});
