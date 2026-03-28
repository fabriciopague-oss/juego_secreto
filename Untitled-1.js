//pregunta 1

let dia = prompt("Qué dia es hoy?");
if (dia === 'Sabado'|| 'Domingo') {
    alert('Buen fin de semana');
}else {
    alert(Buena Semana!);
}

//pregunta 2

let numero = prompt('Escreva un numero positivo o negativo');
if (numero >0){
    alert('El numero es positivo');
}else if (numero <0){
    alert('El numero es negativo');
}else {
    alert('El numero es cero');
}

//pregunta 3

let pontuacion = 105;
if (pontuacion >= 100){
    alert('Felicidades, hasganado');
}else { 
    alert('Intentalo nuevamente para ganar');

}
/* Este esun comentario JavaScript de una linea */


// Ejercicio 1 de repaso ( le suma 1 a contador hasta llegar a 10)
let contador = 1;
 while (contador<= 10){
    console.log(contador);
    contador++;

 }
//Ejercio 2 de repaso ( le resta 1 a contador hasta llegar a 0)
 let contador = 10;
 while (contador >=0){
    console.log(contador);
    contador--;
 }
 //Ejercicio 3 de repaso (cuenta regresiva)
 let numero = Number(prompt('Ingresa un numero para la cuenta regresiva'));
 while(numero >=0){
    console.log(numero);
    numero--;

 }

 //Ejercicio 4 de repaso(cuenta progresiva)

 let numero = Number(prompt('Ingresa un numero para la cuenta progresiva'));
 let contador =0;

 while(contador <= numero){
    console.log(contador);
    contador++;


 }
