// 1. Solicitamos al usuario dos números decimales y los convertimos
let numero1 = parseFloat(prompt("Ingrese el primer número decimal:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número decimal:"));

// 2. Pedimos al usuario que ingrese el tipo de operación
let operacion = prompt(
  "Ingrese el tipo de operación (suma, resta, multiplicación o división):",
);

// 3. Inicializamos una variable para almacenar el resultado
let resultado;

// 4. Usamos condicionales para ejecutar la operación correspondiente
if (operacion === "suma") {
  resultado = numero1 + numero2;
  console.log(`${numero1} + ${numero2} = ${resultado}`);
} else if (operacion === "resta") {
  resultado = numero1 - numero2;
  console.log(`${numero1} - ${numero2} = ${resultado}`);
} else if (operacion === "multiplicación") {
  resultado = numero1 * numero2;
  console.log(`${numero1} × ${numero2} = ${resultado}`);
} else if (operacion === "división") {
  if (numero2 !== 0) {
    resultado = numero1 / numero2;
    console.log(`${numero1} ÷ ${numero2} = ${resultado}`);
  } else {
    console.log(
      "❌ Error: No se puede dividir por cero. Ingrese un divisor válido.",
    );
  }
} else {
  // 5. Si la operación no es válida, informamos al usuario
  console.log(
    `❌ Operación no válida: "${operacion}". Por favor, ingrese suma, resta, multiplicación o división.`,
  );
}
