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

const skils = document.querySelectorAll(".skils__imagem")
const descricao = document.querySelectorAll(".skils__imagem-descricao")

for (let i = 0; i < link.length; i++) {
    skils[i].addEventListener("click", function myScript() {
        descricao[i].classList.toggle("skils__imagem-descricao-transform")
    })

}

// MENU SUSPENSO
const botao_menu = document.querySelector('.menu-botao')
const menu = document.querySelector('.menu-suspenso')

botao_menu.addEventListener('click', () => {
    menu.classList.toggle('displayNone')
    botao_menu.classList.toggle('menu-botao2')
})


// TECLAS
// const audio = document.querySelector('.som')

// for (let i = 0; i < skils.length; i++) {
//     skils[i].addEventListener("mouseover", () => {
//         audio.play()
//     })
// }

// MUTE

const mute = document.querySelector('.botao-volume')

mute.addEventListener('click', () => {
    mute.classList.toggle('botaoCliclado-volume')
    if (mute.classList[1]) {
    }
})

// FONTE

const fonte = document.querySelector('.botao-fonte')
const parag = document.querySelectorAll('.Sobre__Textos-paragrafo')
const fonteDiminuir = document.querySelector(".fundo-fonte-aumentar")

fonte.addEventListener('click', () => {
    parag.forEach((letras) => {
        letras.classList.add('Sobre__Textos-paragrafoPLUS')
        letras.classList.remove('Sobre__Textos-paragrafoMENOS')
    })
})
fonteDiminuir.addEventListener('click', () => {
    parag.forEach((letras) => {
        letras.classList.remove('Sobre__Textos-paragrafoPLUS')
        letras.classList.add('Sobre__Textos-paragrafoMENOS')
    })
})