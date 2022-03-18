export function transicaoImagem() {

    // TRANSICAO DE IMAGEM
    const imagem = document.querySelectorAll(".jobs__Partes-descricao-imagem")
    const link = document.querySelectorAll(".jobs__Partes-descricao-link")

    for (let i = 0; i < link.length; i++) {
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
        skils[i].addEventListener("click", () =>{
            descricao[i].classList.toggle("skils__imagem-descricao-transform")
        })

    }
}