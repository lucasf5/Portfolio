// TELA DE LOADING

var i = setInterval(function () {

    clearInterval(i);
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    

}, 4000);

// BOTAO DA LUZ
const botao = document.querySelector(".botao")
const fundo = document.querySelector(".fundo")

const jobs = document.querySelector(".jobs")

function clicado() {
    botao.classList.toggle('botaoCliclado')
    fundo.classList.toggle('botaoClicladoFundo')
    jobs.classList.toggle("black")
}


botao.addEventListener('click', clicado)


// MAQUINA DE ESCREVER 
const titulo = document.querySelector(".Principal__Informacao-h2")

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () { elemento.innerHTML += letra }, 100 * i)
    });
}

typeWriter(titulo)

// TRANSICAO DE IMAGEM
const imagem = document.querySelectorAll(".jobs__Partes-descricao-imagem")
const link = document.querySelectorAll(".jobs__Partes-descricao-link")

for (let i = 0; i < link.length; i++){
    link[i].addEventListener("mouseover", function myScript() {
        imagem[i].classList.toggle("jobs__Partes-descricao-imagem-transform")
    })
    link[i].addEventListener("mouseout", function myScript() {
        imagem[i].classList.toggle("jobs__Partes-descricao-imagem-transform")
    })
}
