// BOTAO DA LUZ
export function botaoBackground() {
    
    const botao = document.querySelector(".botao")
    const fundo = document.querySelector(".fundo")

    // Tecnologia
    const tituloTec = document.querySelector(".skils__Descricao-titulo")
    const skill = document.querySelector(".skils")

    const skil_imagem = document.querySelectorAll(".skils__imagem")
    const skil_porcentagem = document.querySelectorAll(".skill__imagem--porcentagem-fundo")
    const skill__imagem_logo = document.querySelectorAll(".skill__imagem--logo")
    
    const jobs = document.querySelector(".jobs")

    // Sobre
    const sobre = document.querySelector(".Sobre")
    const sobreTextos = document.querySelector(".Sobre__Textos")
    
    function clicado() {
        botao.classList.toggle('botaoCliclado')
        fundo.classList.toggle('botaoClicladoFundo')
        jobs.classList.toggle("black")

        // tecno
        tituloTec.classList.toggle("skils__Descricao-titulo-azul")
        skill.classList.toggle("skils-branco")
        skil_imagem.forEach(element => {
            element.classList.toggle("branco")
        });
        skil_porcentagem.forEach(element => {
            element.classList.toggle("branco")
        })
        skill__imagem_logo.forEach(element => {
            element.classList.toggle("branco")
        })

        // Sobre
    sobre.classList.toggle("branco")
    sobreTextos.classList.toggle("branco")
        
    }
    
    
    botao.addEventListener('click', clicado)
}
