// 1. Pedimos las tres notas y las convertimos a números decimales
let nota1 = parseFloat(
  prompt("Ingrese la primera nota (puede usar decimales):"),
);
let nota2 = parseFloat(
  prompt("Ingrese la segunda nota (puede usar decimales):"),
);
let nota3 = parseFloat(
  prompt("Ingrese la tercera nota (puede usar decimales):"),
);

// 2. Calculamos el promedio usando operadores aritméticos
// Importante: Usamos paréntesis para que primero sume todo y luego divida por 3
let promedio = (nota1 + nota2 + nota3) / 3;

// 3. Mostramos el promedio en la consola
console.log(`El promedio final de las tres notas es: ${promedio}`);

// 4. Condicional para indicar si el promedio es suficiente para aprobar
if (promedio >= 6) {
  console.log("✅ ¡Felicitaciones! Promedio suficiente para aprobar.");
} else {
  console.log("❌ Promedio insuficiente. Debes recuperar.");
}
