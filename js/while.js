// 1. Contador del 1 al 10

// ALGORITMO
// Dato de entrada: Ninguno (las variables se definen internamente).
// Proceso: Inicializar un contador en 1. Mientras sea menor o igual a 10, imprimirlo y sumarle 1.
// Salida: Mostrar los números del 1 al 10.

console.log("\n🔢 Ejercicio 1: Contador del 1 al 10");

let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// 2. Cuenta regresiva

// ALGORITMO
// Dato de entrada: Ninguno.
// Proceso: Empezar desde 10. Mientras el número sea mayor o igual a 1, imprimirlo y restarle 1.
// Salida: Los números del 10 al 1 y finalmente el mensaje de despegue.

console.log("\n🚀 Ejercicio 2: Cuenta regresiva");

let cuentaRegresiva = 10;
while (cuentaRegresiva >= 1) {
  console.log(cuentaRegresiva);
  cuentaRegresiva--;
}

console.log("¡Despegue! 🚀");

// 3. Mostrar números pares hasta 20

// ALGORITMO
// Dato de entrada: Ninguno.
// Proceso: Empezar en el número 2. Mientras sea menor o igual a 20, imprimir el número y sumarle 2.
// Salida: Todos los números pares entre el 2 y el 20.

console.log("\n✌️ Ejercicio 3: Números pares hasta 20");

let numeroPar = 2;

while (numeroPar <= 20) {
  console.log(numeroPar);
  numeroPar += 2;
}
