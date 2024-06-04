// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
   
    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../loginCadastro.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../loginCadastro.html";
}

// carregamento (loading)
function aguardarLogin() {
    var divAguardar = document.getElementById("div_aguardarLogin");
    divAguardar.style.display = "flex";
}

function finalizarAguardarLogin() {
    var divFimAguardar = document.getElementById("div_aguardarLogin");
    divFimAguardar.style.display = "none";
}
function aguardarCadastro() {
    var divAguardar = document.getElementById("div_aguardarCadastro");
    divAguardar.style.display = "flex";
}

function finalizarAguardarCadastro() {
    var divAguardar = document.getElementById("div_aguardarCadastro");
    divAguardar.style.display = "none";
}


