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
        letras.style.fontSize = '2.0rem'
    })
})
fonteDiminuir.addEventListener('dblclick', () => {
    parag.forEach((letras) => {
        letras.style.fontSize = '1rem'
    })
})
fonteDiminuir.addEventListener('click', () => {
    parag.forEach((letras) => {
        letras.style.fontSize = '1.5rem'
    })
})

// ANIMACAO MOVIMENTACAO

const sections = document.querySelectorAll(".js-scroll")
const imagens = document.querySelectorAll('.skils__imagem')

const windowmetadeAlto = window.innerWidth
let windowMetade = 0

if (windowmetadeAlto <= 1080) {
    windowMetade = window.innerHeight * 0.875
} else if (windowmetadeAlto > 1080){
    windowMetade = window.innerHeight * 0.8
}


    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade
            if (sectionTop < 0) {
                section.classList.add('ativo')
            } else {
                section.classList.remove('ativo')
            }
        })
        imagens.forEach((imagem) => {
            const sectionTop = imagem.getBoundingClientRect().top - windowMetade
            if (sectionTop < 0) {
                imagem.classList.add('ativo')
            } else {
                imagem.classList.remove('ativo')
            }
        })
    }

    window.addEventListener('scroll', animaScroll)


// MODAL

const botaoFechar = document.querySelector('.fechar')
const modal = document.querySelector('.modal')
window.onload = () => {

    botaoFechar.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    modal.addEventListener('click', (evento) => {
        if (evento.target == modal) {
            modal.style.display = 'none'
        }
    })
}