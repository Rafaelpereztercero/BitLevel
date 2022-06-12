
//GRAFICO 1 - DIFERENCIA DE DEPOSITO FIAT CON TOTAL DE FIAT+CRYPTO %
let number_1 = document.getElementById("graphicNumber_1");
let counter = 0;

setInterval(() => {
    if(counter == 32){ //VALOR DINÁMICO n %
        clearInterval();
    }
    else{
        counter++;
        number_1.innerHTML = counter + "%";
    }
}, 55);


let root = document.querySelector(':root');

let rs = getComputedStyle(root);

let graphicValue_1 = rs.getPropertyValue("--graphicValue_1");

console.log(graphicValue_1);

function setGraphicValue(){
    /* PARA REPRESENTAR UN PORCENTAJE (32% POR EJEMPLO) SE REALIZA EL SIGUIENTE CALCULO : TOTAL_DEL_TRAZO(472) - TOTAL_DEL_TRAZO(472) * PORCENTAJE(0.32) = 151,04 */
    root.style.setProperty('--graphicValue_1', 151); //VALOR DINAMICO DEL RECORRIDO DE LA ANIMACIÓN
}

//GRAFICO 2 - DIFERENCIA DEL TOTAL DEL BALANCE EN 24H EN %
let number_2 = document.getElementById("graphicNumber_2");
let counter2 = 0;

setInterval(() => {
    if(counter2 == 54){ //VALOR DINÁMICO n %
        clearInterval();
    }
    else{
        counter2++;
        number_2.innerHTML = counter2 + "%";
    }
}, 40);


//let root = document.querySelector(':root');
//let rs = getComputedStyle(root);

let graphicValue_2 = rs.getPropertyValue("--graphicValue_2");

console.log(graphicValue_2);

function setGraphicValue(){
    /* PARA REPRESENTAR UN PORCENTAJE (54% POR EJEMPLO) SE REALIZA EL SIGUIENTE CALCULO : TOTAL_DEL_TRAZO(472) - TOTAL_DEL_TRAZO(472) * PORCENTAJE(0.54) = 217 */
    root.style.setProperty('--graphicValue_2', 217); //VALOR DINAMICO DEL RECORRIDO DE LA ANIMACIÓN
}