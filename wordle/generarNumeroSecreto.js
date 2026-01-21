let numeroSecreto = []; //Este array guarda los 5 digitos 

function generarNumeroSecreto() {
let n = 0;

while (n < 5) {
    let numero = Math.floor(Math.random() * 10);   // genera numero secreto  inspirado por la pagina baulcode.
    if (!numeroSecreto.includes(numero)) {         //Guardo en una variable un numero del 0 al 9
        numeroSecreto.push(numero);                 // si el numero no esta incluido en el array se añade
        n++;
    }
}

console.log(numeroSecreto);

}

generarNumeroSecreto();


let caja1_1 = document.getElementById("caja_1_1"); // aqui guardo cada input para luego ponerle numeros mas tarde
let caja1_2 = document.getElementById("caja_1_2");
let caja1_3 = document.getElementById("caja_1_3");
let caja1_4 = document.getElementById("caja_1_4");
let caja1_5 = document.getElementById("caja_1_5");

let caja2_1 = document.getElementById("caja_2_1");
let caja2_2 = document.getElementById("caja_2_2");
let caja2_3 = document.getElementById("caja_2_3");
let caja2_4 = document.getElementById("caja_2_4");
let caja2_5 = document.getElementById("caja_2_5");

let caja3_1 = document.getElementById("caja_3_1");
let caja3_2 = document.getElementById("caja_3_2");
let caja3_3 = document.getElementById("caja_3_3");
let caja3_4 = document.getElementById("caja_3_4");
let caja3_5 = document.getElementById("caja_3_5");

let caja4_1 = document.getElementById("caja_4_1");
let caja4_2 = document.getElementById("caja_4_2");
let caja4_3 = document.getElementById("caja_4_3");
let caja4_4 = document.getElementById("caja_4_4");
let caja4_5 = document.getElementById("caja_4_5");

let caja5_1 = document.getElementById("caja_5_1");
let caja5_2 = document.getElementById("caja_5_2");
let caja5_3 = document.getElementById("caja_5_3");
let caja5_4 = document.getElementById("caja_5_4");
let caja5_5 = document.getElementById("caja_5_5");

let caja6_1 = document.getElementById("caja_6_1");
let caja6_2 = document.getElementById("caja_6_2");
let caja6_3 = document.getElementById("caja_6_3");
let caja6_4 = document.getElementById("caja_6_4");
let caja6_5 = document.getElementById("caja_6_5");

let numintentos = document.getElementById("numintentos"); // nueva variable que he creado para que salga por pantalla 

// listeners
document.getElementById("boton0").onclick = function(){ pulsar(0) }; // cada boton tiene una funcion cuando lo pulsas 
document.getElementById("boton1").onclick = function(){ pulsar(1) };
document.getElementById("boton2").onclick = function(){ pulsar(2) };
document.getElementById("boton3").onclick = function(){ pulsar(3) }; // te da numeros
document.getElementById("boton4").onclick = function(){ pulsar(4) };
document.getElementById("boton5").onclick = function(){ pulsar(5) };
document.getElementById("boton6").onclick = function(){ pulsar(6) };
document.getElementById("boton7").onclick = function(){ pulsar(7) };
document.getElementById("boton8").onclick = function(){ pulsar(8) };
document.getElementById("boton9").onclick = function(){ pulsar(9) };
document.getElementById("botoncomprobar").onclick = function(){ comprobarFila() }; // llama a comprobar fila
document.getElementById("botonreset").onclick = function(){ reset() };  // llama a reset



let gruponumeros1 = []; // array vacio
gruponumeros1[0] = caja1_1; // almaceno cada fila del tablero en array para recorrerla en un for
gruponumeros1[1] = caja1_2;
gruponumeros1[2] = caja1_3;
gruponumeros1[3] = caja1_4;
gruponumeros1[4] = caja1_5;

let gruponumeros2 = [];
gruponumeros2[0] = caja2_1;
gruponumeros2[1] = caja2_2;
gruponumeros2[2] = caja2_3;
gruponumeros2[3] = caja2_4;
gruponumeros2[4] = caja2_5;

let gruponumeros3 = [];
gruponumeros3[0] = caja3_1;
gruponumeros3[1] = caja3_2;
gruponumeros3[2] = caja3_3;
gruponumeros3[3] = caja3_4;
gruponumeros3[4] = caja3_5;

let gruponumeros4 = [];
gruponumeros4[0] = caja4_1;
gruponumeros4[1] = caja4_2;
gruponumeros4[2] = caja4_3;
gruponumeros4[3] = caja4_4;
gruponumeros4[4] = caja4_5;

let gruponumeros5 = [];
gruponumeros5[0] = caja5_1;
gruponumeros5[1] = caja5_2;
gruponumeros5[2] = caja5_3;
gruponumeros5[3] = caja5_4;
gruponumeros5[4] = caja5_5;

let gruponumeros6 = [];
gruponumeros6[0] = caja6_1;
gruponumeros6[1] = caja6_2;
gruponumeros6[2] = caja6_3;
gruponumeros6[3] = caja6_4;
gruponumeros6[4] = caja6_5;

let intentos = 1; //fila actual
let posicionactual = 0;//columna actual

function pulsar(numero) {

    if(intentos === 1) {                // cuando pulso un numero lo pone en su casilla de la fila actual
        for (let i=0; i<5; i++) {       // lo guardo en valorfila para compararlo
            if(posicionactual == i) {   //luego pasa a la siguiente columna 
                gruponumeros1[i].value = numero;
                valorfila1.push(numero);

            }
        }
    }

    if(intentos === 2) {
        for (let i=0; i<5; i++) {
            if(posicionactual == i) {
                gruponumeros2[i].value = numero;
                 valorfila2.push(numero);

            }
        }
    }

    if(intentos === 3) {
        for (let i=0; i<5; i++) {
            if(posicionactual == i) {
                gruponumeros3[i].value = numero;
                 valorfila3.push(numero);

            }
        }
    }

    if(intentos === 4) {
        for (let i=0; i<5; i++) {
            if(posicionactual == i) {
                gruponumeros4[i].value = numero;
                valorfila4.push(numero);

            }
        }
    }

    if(intentos === 5) {
        for (let i=0; i<5; i++) {
            if(posicionactual == i) {
                gruponumeros5[i].value = numero;
                valorfila5.push(numero);

                
            }
        }
    }

    if(intentos === 6) {
        for (let i=0; i<5; i++) {
            if(posicionactual == i) {
                gruponumeros6[i].value = numero;
                valorfila6.push(numero);

            }
        }
    }

    posicionactual = posicionactual +1;
}
//guardan numeros que pone el jugador en cada fila
let valorfila1 = []; 
let valorfila2 = [];
let valorfila3 = [];
let valorfila4 = [];
let valorfila5 = [];
let valorfila6 = [];

       

function comprobarFila() {
    let correcto = 0; // contador de numeros que estan en la posicion correcta

 // revisamos la fila 1 si estamos en el intento 1
    if(intentos == 1) {                    
  for(let i = 0; i<5;i++) {  // recorremos las 5 casillas de la fila               
     if(valorfila1[i] == numeroSecreto[i]) { // si el numero coincide con el secreto en la misma posicion
       
        correcto = correcto + 1; // sumamos 1 al contador

         if(correcto == 5) { // si los 5 números coinciden
            alert("felicidades");
        }
    }
}

    }

     if(intentos == 2) {
  for(let i = 0; i<5;i++) {
     if(valorfila2[i] == numeroSecreto[i]) {
        correcto = correcto + 1;

         if(correcto == 5) {
            alert("felicidades");
        }
    }
}
     }

       if(intentos == 3) {
  for(let i = 0; i<5;i++) {
     if(valorfila3[i] == numeroSecreto[i]) {
        correcto = correcto + 1;

         if(correcto == 5) {
            alert("felicidades");
        }
    }
}
       }

    if(intentos == 4) {
  for(let i = 0; i<5;i++) {
     if(valorfila4[i] == numeroSecreto[i]) {
        correcto = correcto + 1;

         if(correcto == 5) {
            alert("felicidades");
        }
    }
}
    }

        if(intentos == 5) {
  for(let i = 0; i<5;i++) {
     if(valorfila5[i] == numeroSecreto[i]) {
        correcto = correcto + 1;

         if(correcto == 5) {
            alert("felicidades");
        }
    }
}
        }

           if(intentos == 6) {
  for(let i = 0; i<5;i++) {
     if(valorfila6[i] == numeroSecreto[i]) {
        correcto = correcto + 1;

      
      
    }
      
}
   if(correcto == 5) {
            alert("felicidades");
        }

        else {
            alert("perdiste el numero secreto era "+ numeroSecreto.join(''));//quita comas del array al mostrar numero
            

        }



 }


    colorearcelda(); // al terminar la fila viene aqui cambia el color de la casilla

    numintentos.textContent = "Has realizado "+ intentos + " intentos"; //cambia el num de intentos
    


    intentos = intentos + 1; // siguiente fila
    posicionactual = 0; //primera columna

   
} 

function reset() {
    // recorremos todas las casillas de cada fila
   for(let i = 0;i<5;i++) {
    gruponumeros1[i].value = "";
    gruponumeros2[i].value = "";
    gruponumeros3[i].value = "";
    gruponumeros4[i].value = "";
    gruponumeros5[i].value = "";
    gruponumeros6[i].value = "";

  // quitamos los colores de acierto, casi y error
    gruponumeros1[i].classList.remove("acertado","casi","incorrecto");
    gruponumeros2[i].classList.remove("acertado","casi","incorrecto");
    gruponumeros3[i].classList.remove("acertado","casi","incorrecto");
    gruponumeros4[i].classList.remove("acertado","casi","incorrecto");
    gruponumeros5[i].classList.remove("acertado","casi","incorrecto");
    gruponumeros6[i].classList.remove("acertado","casi","incorrecto");

    
   }
   // vaciamos los arrays que guardan los números de cada fila
    valorfila1 = [];
    valorfila2 = [];
    valorfila3 = [];
    valorfila4 = [];
    valorfila5 = [];
    valorfila6 = [];

// reiniciamos la fila y la columna actual
   intentos = 1;
   posicionactual = 0;

   numeroSecreto = [];

    numintentos.textContent = ""; //vaciar num intentos

   generarNumeroSecreto();
   

   
   

}
 function colorearcelda() {
     // segun la fila actual revisamos cada casilla de esa fila
    if(intentos == 1) {
        for(let i = 0; i<5 ;i++) {
            if(valorfila1[i] == numeroSecreto[i]) {
                gruponumeros1[i].classList.add("acertado"); // si el número es exacto crea una clase en css acertado
            }
            else if (numeroSecreto.includes(valorfila1[i])) {
                gruponumeros1[i].classList.add("casi"); // si el número esta en el array crea una clase en css casi
            }
            else {  
                gruponumeros1[i].classList.add("incorrecto"); // si el número no esta en el array crea una clase en css incorrecto
            }
        }
    }
    if(intentos == 2) {
        for(let i = 0; i<5 ;i++) {
            if(valorfila2[i] == numeroSecreto[i]) {
                gruponumeros2[i].classList.add("acertado");
            }
            else if (numeroSecreto.includes(valorfila2[i])) {
                gruponumeros2[i].classList.add("casi");
            }
            else {  
                gruponumeros2[i].classList.add("incorrecto");
            }
        }
    }
    if(intentos == 3) {
        for(let i = 0; i<5 ;i++) {
            if(valorfila3[i] == numeroSecreto[i]) {
                gruponumeros3[i].classList.add("acertado");
            }
            else if (numeroSecreto.includes(valorfila3[i])) {
                gruponumeros3[i].classList.add("casi");
            }
            else {  
                gruponumeros3[i].classList.add("incorrecto");
            }
        }
    }
    if(intentos == 4) {
        for(let i = 0; i<5 ;i++) {
            if(valorfila4[i] == numeroSecreto[i]) {
                gruponumeros4[i].classList.add("acertado");
            }
            else if (numeroSecreto.includes(valorfila4[i])) {
                gruponumeros4[i].classList.add("casi");
            }
            else {  
                gruponumeros4[i].classList.add("incorrecto");
            }
        }
    }
    if(intentos == 5) {
        for(let i = 0; i<5 ;i++) {
            if(valorfila5[i] == numeroSecreto[i]) {
                gruponumeros5[i].classList.add("acertado");
            }
            else if (numeroSecreto.includes(valorfila5[i])) {
                gruponumeros5[i].classList.add("casi");
            }
            else {  
                gruponumeros5[i].classList.add("incorrecto");
            }
        }
    }
    if(intentos == 6) {
        for(let i = 0; i<5 ;i++) {
            if(valorfila6[i] == numeroSecreto[i]) {
                gruponumeros6[i].classList.add("acertado");
            }
            else if (numeroSecreto.includes(valorfila6[i])) {
                gruponumeros6[i].classList.add("casi");
            }
            else {  
                gruponumeros6[i].classList.add("incorrecto");
            }
        }
    }
}
