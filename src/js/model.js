class FilmeModel {
  constructor() {
    this._titulo;
    this._ano;
    this._lancamento;
    this._duracao;
    this._genero;
    this._diretor;
    this._roteirista;
    this._atores;
    this._sinopse;
    this._idioma;
    this._pais;
    this._premios;
    this._posterUrl;
    this._avaliacoes;
    this._orcamento;
  }
  get titulo() {
    return this._titulo;
  }
  get ano() {
    return this._ano;
  }
  get lancamento() {
    return this._lancamento;
  }
  get duracao() {
    return this._duracao;
  }
  get genero() {
    return this._genero;
  }
  get diretor() {
    return this._diretor;
  }
  get roteirista() {
    return this._roteirista;
  }
  get atores() {
    return this._atores;
  }
  get sinopse() {
    return this._sinopse;
  }
  get idioma() {
    return this._idioma;
  }
  get pais() {
    return this._pais;
  }
  get premios() {
    return this._premios;
  }
  get poster() {
    return this._posterUrl;
  }
  get avaliacoes() {
    return this._avaliacoes;
  }
  get orcamento() {
    return this._orcamento;
  }

  requisicao(filme, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://www.omdbapi.com/?t=${filme}&apikey=42ec324e`);

    request.addEventListener("load", () => {
      if (request.status == 200) {
        let response = JSON.parse(request.responseText);
        this._titulo = response.Title;
        this._ano = response.Year;
        this._lancamento = response.Released;
        this._duracao = response.Runtime;
        this._genero = response.Genre;
        this._diretor = response.Director;
        this._roteirista = response.Writer;
        this._atores = response.Actors;
        this._sinopse = response.Plot;
        this._idioma = response.Language;
        this._pais = response.Country;
        this._premios = response.Awards;
        this._posterUrl = response.Poster;
        this._avaliacoes = response.Ratings;
        this._orcamento = response.BoxOffice;
        callback();
      } else if (request.status == 404) {
        console.log(`O filme procurado não foi encontrado ${request.status}`);
      } else {
        console.log(`Erro:${request.status} Houve um erro inesperado!`);
      }
    });
    request.send();
  }
}
