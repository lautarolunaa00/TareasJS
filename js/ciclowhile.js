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
  console.log(`Sumaste $${monto}. Total acumulado: $${totalAhorrado}`);
}

console.log(`🎉 ¡Objetivo alcanzado! Ahorraste $${totalAhorrado}`);

// 2. El Triángulo de Asteriscos (for anidado) -------------------------
// El bucle externo controla las filas, el interno cuántos asteriscos por fila.

console.log("\n⭐ Ejercicio 2: Triángulo de Asteriscos");

for (let fila = 1; fila <= 5; fila++) {
  let linea = ""; // Empezamos cada fila vacía

  for (let asterisco = 1; asterisco <= fila; asterisco++) {
    linea += "*"; // Agregamos un asterisco por cada iteración interna
  }

  console.log(linea);
}

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

// 4. Gestor de "Horas de Estudio" (for) ------------------------------
// Pedir horas por cada día de la semana (7 días), acumular, y calcular el promedio.

console.log("\n📚 Ejercicio 4: Gestor de Horas de Estudio");

const diasSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
let totalHoras = 0;

for (let dia = 0; dia < 7; dia++) {
  let horas = Number(
    prompt(`¿Cuántas horas estudiaste el ${diasSemana[dia]}?`),
  );

  // Si ingresó un valor negativo o inválido, pedimos de nuevo
  while (isNaN(horas) || horas < 0) {
    horas = Number(
      prompt(
        `⚠️ Valor inválido. ¿Cuántas horas estudiaste el ${diasSemana[dia]}?`,
      ),
    );
  }

  totalHoras += horas;
}

let promedio = totalHoras / 7;
console.log(`\n📊 Total de horas de la semana: ${totalHoras}`);
console.log(`📈 Promedio diario: ${promedio.toFixed(1)} horas`);

// 5. Simulador de "Carrito con Descuentos Progresivos" (while) --------
// Sumar productos mientras el usuario quiera, aplicar 10% si supera $5000.

console.log("\n🛒 Ejercicio 5: Carrito de Descuentos Progresivos");

let totalCarrito = 0;
let cantidadProductos = 0;
let seguirComprando = "si";

while (seguirComprando === "si") {
  let precio = Number(prompt("Ingresá el precio del producto:"));

  // Validamos que el precio sea positivo
  if (isNaN(precio) || precio <= 0) {
    console.log("⚠️ Precio inválido, ingresá un número positivo.");
    continue;
  }

  totalCarrito += precio;
  cantidadProductos++;
  console.log(
    `Producto #${cantidadProductos} - $${precio} | Total parcial: $${totalCarrito}`,
  );

  seguirComprando = prompt(
    "¿Querés agregar otro producto? (si/no):",
  ).toLowerCase();
}

// Aplicamos el descuento solo al final, después de sumar todo
if (totalCarrito > 5000) {
  let descuento = totalCarrito * 0.1;
  console.log(`\n🎉 ¡Has obtenido un 10% de descuento!`);
  console.log(`Subtotal: $${totalCarrito}`);
  console.log(`Descuento: -$${descuento}`);
  totalCarrito -= descuento;
}

console.log(
  `\n💳 Total final: $${totalCarrito} (${cantidadProductos} productos)`,
);
