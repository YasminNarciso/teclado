function tocaSom (seletorElemento) {

    const elemento = document.querySelector(seletorElemento);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }

}
const listaDeTeclas = document.querySelectorAll('.tecla');

for ( let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i]; 
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ative');
        }  
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ative');
    }
}
