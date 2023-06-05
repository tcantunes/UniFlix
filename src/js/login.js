function login() {
  let email = document.querySelector("#inputEmail1");
  let labelEmail = document.querySelector("#labelEmail");

  let senha = document.querySelector("#inputPassword1");
  let labelSenha = document.querySelector("#labelPassword");

  let mensagemError = document.querySelector(".mensagemError");

  let usuarios = [];

  let validaUsuario = {
    nome: "",
    email: "",
    senha: ""
  };

  usuarios = JSON.parse(localStorage.getItem("usuarios"));

  usuarios.forEach((item) => {
    if (email.value == item.email && senha.value == item.senha) {
      validaUsuario = {
        nome: item.nome,
        email: item.email,
        senha: item.senha
      };
    }
  });

  if (email.value == validaUsuario.email && senha.value == validaUsuario.senha) {
    window.location.href = "../../index.html"
  } else {
    labelEmail.setAttribute('style', 'color: red')
    email.setAttribute('style', 'border-color: red')
    labelSenha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')

    mensagemError.setAttribute('style', 'display: block')
    mensagemError.innerHTML = 'Email ou senha incorretos'
    email.focus()
  }
  event.preventDefault();
}
