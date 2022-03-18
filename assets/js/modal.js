// MODAL
function modal() {
    
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
}