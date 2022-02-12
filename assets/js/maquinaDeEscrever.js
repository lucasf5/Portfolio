
// MAQUINA DE ESCREVER 
export function maquinaEscrever(){
    const titulo = document.querySelector(".Principal__Informacao-h2")
    
    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(function () { elemento.innerHTML += letra }, 100 * i)
        });
    }
    
    typeWriter(titulo)
}
