// ANIMACAO MOVIMENTACAO
export function animaScroll() {
    
    const sections = document.querySelectorAll(".js-scroll")
    const imagens = document.querySelectorAll('.skils__imagem')

    const windowmetadeAlto = window.innerWidth
    let windowMetade = 0

    if (windowmetadeAlto <= 1080) {
        windowMetade = window.innerHeight * 0.875
    } else if (windowmetadeAlto > 1080){
        windowMetade = window.innerHeight * 0.9
    }

    function animaScrollSections() {
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

        window.addEventListener('scroll', animaScrollSections)

}
