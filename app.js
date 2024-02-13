let numeroSecreto = 0;
let intentos = 0;
let listaNumerossorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asiganarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asiganarTextoElemento('p', `Acertaste en numero en ${intentos} ${(intentos == 1) ? ' vez ' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no hacerto
        if (numeroDeUsuario > numeroSecreto){
            asiganarTextoElemento('p', 'Tu numero es menor');
        } else {
            asiganarTextoElemento('p', 'Tu numero es mayor');
        }
        intentos++
        limpiarCaja();

    }
}
function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto (){
    return Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerossorteados.length ==numeroMaximo){
        asiganarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{
         //si el numero generado esta incluido en la lista
    if(listaNumerossorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerossorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

function condicionesIniciales(){
    asiganarTextoElemento('h1', 'Juego del Numero Secreto');
    asiganarTextoElemento('p',`Indica un Nuemero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //mensaje de inicio de numeros
    //generar numero aleatorio
     //iniciar el numero de intentos
     condicionesIniciales();
    //deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
     
    }

condicionesIniciales();