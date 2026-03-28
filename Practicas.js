Practicas

let nombreUsuario = prompt("¿Cuál es tu nombre?");
let mensaje = "Hola " + nombreUsuario + ", bienvenido a JavaScript";

alert(mensaje);
console.log(mensaje);

let valor1 = 2;
let valor2 = 5;

let resultado = valor1 + valor2;

console.log("La suma de " + valor1 + " y " + valor2 + " es igual a: " + resultado);


let valor1 = 8;
let valor2 = 6;

let resultado = valor1 - valor2;

console.log("La resta de " + valor1 + " y " + valor2 + " es igual a: " + resultado);

let edad = Number(prompt("Cuál es tu edad?"));

if (edad >= 18){
    alert("Eres mayor de edad");
   
} else{
        alert("Eres menor de edad");
    }

    let numero = Number(prompt("Ingresa un número "));

    if (numero > 0){
        alert("El número es positivo");
    }else if (numero === 0){
        alert("El número es cero");
    }else{
        alert("El número es negativo");
    }

    let contador = 1;

    while (contador <=10 ) {
        console.log(contador);
        contador++;
    }

   
let nota = 7;

if (nota >= 7){
    alert("Aprobaste");
    console.log("Aprobaste");
}else {
    alert("Reprobaste");
    console.log("Reprobaste");
}

let numero = Math.random();
console.log(numero);



let numero = Math.floor(Math.random() * 10) + 1;
console.log(numero);

let numero = Math.floor(Math.random() * 1000) + 1;
console.log(numero);


let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = Number(prompt("Me indicas un número de 1 a 10"));

console.log(numeroUsuario);

if(numeroUsuario === numeroSecreto){
    alert("Acertaste el numero secreto");
}else {
    if(numeroUsuario > numeroSecreto){
        alert("El numero secreto es menor al numero que ingresaste");
    } else{
        alert("El numero secreto es mayor al numero que ingresaste");
    }
    
}