let frutas = ['Frambueza', 'Mango', 'Futilla']
frutas.push('Banana')
frutas.unshift('Manzana')
frutas.pop()
frutas.shift()
console.log(frutas)

//Ejercicio 2  

let nombres = ['Facu', 'Benja', 'Valen']
console.log(nombres.length)
nombres.push('Jose','Cata')
console.log(nombres.length)

//Ejercicio 3  

let num = [0, 1, 2, 3];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//Ejercicio 4 

let numeros = [2, 4, 10, 15]
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i]; 
}
console.log("La suma total es:", suma);

//Ejercicio 5 

alert('A continuación se te pedirá que ingreses 5 palabras');
let palabras = [];
for (let i = 0; i < 5; i++) {

  let palabra = prompt("Escribe una palabra:");
  palabras.push(palabra);
}
console.log("Las palabras que escribiste son:", palabras);

