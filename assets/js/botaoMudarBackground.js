// BOTAO DA LUZ
export function botaoBackground() {
    
    const botao = document.querySelector(".botao")
    const fundo = document.querySelector(".fundo")
    
    const jobs = document.querySelector(".jobs")
    
    function clicado() {
        botao.classList.toggle('botaoCliclado')
        fundo.classList.toggle('botaoClicladoFundo')
        jobs.classList.toggle("black")
    }
    
    
    botao.addEventListener('click', clicado)
}
