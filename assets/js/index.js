import { loading } from "./loading.js";
import { botaoBackground } from "./botaoMudarBackground.js";
import { maquinaEscrever } from "./maquinaDeEscrever.js";
import { transicaoImagem } from "./transicaoImagem.js";

loading()
botaoBackground()
maquinaEscrever()
transicaoImagem()

// ------------------------------------------------------------------------

// MENU SUSPENSO
const botao_menu = document.querySelector('.menu-botao')
const menu = document.querySelector('.menu-suspenso')

botao_menu.addEventListener('click', () => {

    menu.classList.toggle('displayNone')
    botao_menu.classList.toggle('active')
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

// CARDS
const imagemEsquerda = document.querySelectorAll('.skils__imagem')

imagemEsquerda.forEach(img => {
    window.addEventListener('scroll', () => {
        const posicao = document.querySelector('.skils').getBoundingClientRect().top - 580

        if (posicao > 0) {
            img.style.transform = `translate(${(-posicao) + 'px'})`
        } else if (posicao < 0) {
            img.style.transform = `translate(0px)`
        }
    })
})

// HEADER

// const cabecalho = document.querySelector('.Principal')

//     window.onload = () => {      
//             cabecalho.style.transform = 'translate(0,0)'
//             cabecalho.style.transition = '1s all'
//     }
