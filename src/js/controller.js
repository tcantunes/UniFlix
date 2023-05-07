class FilmeController {
  static exibeFilme() {
    let filmes = [
      "Black Widow",
      "Joker",
      "City by the Sea",
      "Les Misérables",
      "Ferris Bueler’s Day Off",
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
      "Ferris Bueller’s Day Off",
    ];
    for (let filme of filmes) {
      let model = new FilmeModel();
      model.requisicao(filme, () => {
        let view = new View();
        view.update(model);
      });
    }
  }
}
