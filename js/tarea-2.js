// 1. Solicitamos al usuario dos números y los convertimos a enteros
let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));

// 2. Determinamos cuál es mayor o si son iguales usando condicionales
if (numero1 > numero2) {
  console.log(
    `El primer número (${numero1}) es mayor que el segundo (${numero2}).`,
  );
} else if (numero2 > numero1) {
  console.log(
    `El segundo número (${numero2}) es mayor que el primero (${numero1}).`,
  );
} else {
  // Si no es mayor el primero, ni es mayor el segundo, por descarte son iguales
  console.log(`Ambos números son exactamente iguales (${numero1}).`);
}
