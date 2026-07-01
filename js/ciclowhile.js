// 1. El Acumulador de "Dinero con Tope" (while) ----------------------
// Acumular montos de ahorro hasta llegar a $1000, validando que no sean negativos.

console.log("\n💰 Ejercicio 1: Acumulador de Dinero con Tope");

let totalAhorrado = 0;

while (totalAhorrado < 1000) {
  let monto = Number(
    prompt(`Llevas $${totalAhorrado}. Ingresá un monto de ahorro:`),
  );

  // Si el monto es negativo o no es número, lo ignoramos
  if (isNaN(monto) || monto <= 0) {
    console.log("⚠️ Monto inválido, ingresá un número positivo.");
    continue; // Vuelve al inicio del while sin sumar nada
  }

  totalAhorrado += monto;
  console.log(`Sumaste $${monto.toFixed(2)}. Total acumulado: $${totalAhorrado.toFixed(2)}`);
}

console.log(`🎉 ¡Objetivo alcanzado! Ahorraste $${totalAhorrado.toFixed(2)}`);

// 3. El Simulador de "Token de Seguridad" (while) --------------------
// Máximo 3 intentos para adivinar un código fijo. Dos condiciones en el while.

console.log("\n🔐 Ejercicio 3: Token de Seguridad");

const codigoCorrecto = 2022;
let intentos = 0;
let codigoIngresado;

// El while sigue MIENTRAS el código sea incorrecto Y queden intentos
while (codigoIngresado !== codigoCorrecto && intentos < 3) {
  intentos++;
  codigoIngresado = Number(
    prompt(`Intento ${intentos}/3 - Ingresá el código de seguridad:`),
  );

  if (codigoIngresado === codigoCorrecto) {
    console.log("✅ Código correcto. ¡Acceso concedido!");
  } else if (intentos < 3) {
    console.log("❌ Código incorrecto. Intentá de nuevo.");
  }
}

// Si salió del while sin acertar, se bloqueó
if (codigoIngresado !== codigoCorrecto) {
  console.log("🚫 Cuenta bloqueada. Superaste los 3 intentos.");
}

// 5. Simulador de "Carrito con Descuentos Progresivos" (while) --------
// Sumar productos mientras el usuario quiera, aplicar 10% si supera $5000.

console.log("\n🛒 Ejercicio 5: Carrito de Descuentos Progresivos");

// Funciones auxiliares para el carrito
const esPrecioValido = (precio) => !isNaN(precio) && precio > 0;
const calcularDescuento = (total) => (total > 5000 ? total * 0.1 : 0);

let totalCarrito = 0;
let cantidadProductos = 0;
let seguirComprando = "si";

while (seguirComprando === "si") {
  let precio = Number(prompt("Ingresá el precio del producto:"));

  // Validamos usando la función flecha
  if (!esPrecioValido(precio)) {
    console.log("⚠️ El precio debe ser mayor a $0. Ingresá un número positivo válido.");
    continue;
  }

  totalCarrito += precio;
  cantidadProductos++;
  console.log(
    `Producto #${cantidadProductos} - $${precio.toFixed(2)} | Total parcial: $${totalCarrito.toFixed(2)}`,
  );

  let respuesta = prompt("¿Querés agregar otro producto? (si/no):");
  if (respuesta === null) {
    seguirComprando = "no";
  } else {
    seguirComprando = respuesta.toLowerCase();
  }
}

// Aplicamos el descuento solo al final usando la función
let descuento = calcularDescuento(totalCarrito);

if (descuento > 0) {
  console.log(`\n🎉 ¡Has obtenido un 10% de descuento!`);
  console.log(`Subtotal: $${totalCarrito.toFixed(2)}`);
  console.log(`Descuento: -$${descuento.toFixed(2)}`);
  totalCarrito -= descuento;
}

console.log(
  `\n💳 Total final: $${totalCarrito.toFixed(2)} (${cantidadProductos} productos)`,
);
