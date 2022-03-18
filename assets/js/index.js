import { loading } from "./loading.js";
import { botaoBackground } from "./botaoMudarBackground.js";
import { maquinaEscrever } from "./maquinaDeEscrever.js";
import { transicaoImagem } from "./transicaoImagem.js";
import { animaScroll } from "./animaScroll.js";

loading()
botaoBackground()
maquinaEscrever()
animaScroll()
transicaoImagem()

// ------------------------------------------------------------------------

// MENU SUSPENSO
const botao_menu = document.querySelector('.menu-botao')
const menu = document.querySelector('.menu-suspenso')

botao_menu.addEventListener('click', () => {

    menu.classList.toggle('displayNone')
    botao_menu.classList.toggle('active')
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
