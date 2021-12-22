import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";
// Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

// Ordem para executar o login
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (e) => {
    let nome = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(nome, senha);
    
    document.getElementById("titleModal").innerHTML = alertModal.title;
    document.getElementById("bodyModal").innerHTML = alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.b1;
    document.getElementById("btnModalSave").innerHTML = alertModal.b2;

    myModal.show();
    setTimeout(carregarPagina, 3500);
    function carregarPagina() {
        window.location.href = controleRotasApp.validaRota(localStorage.status, alertModal.idModal);
    }
});

/* Ordem para criar um novo usuario */
const novoUsuario = document.getElementById("btnNovoUser");
novoUsuario.addEventListener("click", (e) => {
    window.location.href = controleRotasApp.validaRota("false", "usuarioNaoExiste1");
});