let nome = document.querySelector("#inputName1");
let labelNome = document.querySelector("#labelNome");
let validaNome = false;

let email = document.querySelector("#inputEmail1");
let labelEmail = document.querySelector("#labelEmail");
let validaEmail = false;

let senha = document.querySelector("#inputPassword1");
let labelSenha = document.querySelector("#labelPassword");
let validaSenha = false;

let confirmaSenha = document.querySelector("#confirmaInputPassword1");
let labelConfirmaSenha = document.querySelector("#labelConfirmaPassword");
let validaConfirmaSenha = false;

let mensagemError = document.querySelector(".mensagemError");
let mensagemSucesso = document.querySelector(".mensagemSucesso");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "<strong>Insira no mínimo 3 caracteres</strong>";
    nome.setAttribute("style", "border-color: red");
    validaNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "<strong>Nome</strong>";
    nome.setAttribute("style", "border-color: green");
    validaNome = true;
  }
});

email.addEventListener("keyup", () => {
  var er = new RegExp(
    /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
  );
  if (email.value == '' || !er.test(email.value)) {
    labelEmail.setAttribute("style", "color: red");
    labelEmail.innerHTML = "<strong>Formato de email incorreto</strong>";
    email.setAttribute("style", "border-color: red");
    validaEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: green");
    labelEmail.innerHTML = "<strong>Email</strong>";
    email.setAttribute("style", "border-color: green");
    validaEmail = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "<strong>Insira no mínimo 6 caracteres</strong>";
    senha.setAttribute("style", "border-color: red");
    validaSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "<strong>Senha</strong>";
    senha.setAttribute("style", "border-color: green");
    validaSenha = true;
  }
});

confirmaSenha.addEventListener("keyup", () => {
  if (senha.value != confirmaSenha.value) {
    labelConfirmaSenha.setAttribute("style", "color: red");
    labelConfirmaSenha.innerHTML = "<strong>As senhas não são iguais</strong>";
    confirmaSenha.setAttribute("style", "border-color: red");
    validaConfirmaSenha = false;
  } else {
    labelConfirmaSenha.setAttribute("style", "color: green");
    labelConfirmaSenha.innerHTML = "<strong>Confirme Senha</strong>";
    confirmaSenha.setAttribute("style", "border-color: green");
    validaConfirmaSenha = true;
  }
});

function cadastrar() {
  if (validaNome && validaConfirmaSenha && validaEmail && validaSenha) {
    //Aqui estamos simulando um banco de dados utilizando o localStorage do navegador para armazenar os usuários cadastrados
    let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    //Aqui estamos pegando os valores digitados nos inputs e salvando em um objeto
    usuarios.push({
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    });

    // Aqui estamos salvando no localStorage nosso objeto usuarios
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Se a validação passar, teremos uma mensagem de sucesso
    mensagemSucesso.setAttribute("style", "display: block");
    mensagemSucesso.innerHTML =
      "<strong> Usuário está sendo criado...</strong>";
    mensagemError.setAttribute("style", "display: none");
    mensagemError.innerHTML = "";

    setTimeout(() => {
      window.location.href = "../paginas/login.html";
    }, 3000);
    event.preventDefault();
  } else {
    // Caso a validação não passe, teremos mensagem de error
    mensagemError.setAttribute("style", "display: block");
    mensagemError.innerHTML =
      "<strong> Preencha os campos corretamente.</strong>";
    mensagemSucesso.innerHTML = "";
    mensagemSucesso.setAttribute("style", "display: none");
    event.preventDefault();
  }
}
