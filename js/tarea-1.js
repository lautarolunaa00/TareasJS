// 1. Pedimos el monto de la compra y lo transformamos a número de inmediato
let compra = Number(prompt("Ingrese el valor de la compra en dólares:"));
let descuento = 0;

// 2. Evaluamos las condiciones de mayor a menor (o en orden lógico)
if (compra > 500) {
  descuento = 0.15; // 15% de descuento
} else if (compra > 300 && compra <= 500) {
  descuento = 0.1; // 10% de descuento
} else if (compra >= 100 && compra <= 300) {
  descuento = 0.05; // 5% de descuento
} else {
  descuento = 0; // Menos de 100, no hay descuento
}

// 3. Calculamos los totales
let montoDescuento = compra * descuento;
let totalConDescuento = compra - montoDescuento;

// 4. Mostramos el resultado usando Template Strings
if (descuento > 0) {
  console.log(`Monto original: $${compra}`);
  console.log(
    `¡Tenés un descuento del ${descuento * 100}%! Te ahorrás: $${montoDescuento}`,
  );
  console.log(`Total a pagar: $${totalConDescuento}`);
} else {
  console.log(
    `Monto a pagar: $${compra}. (No aplica descuento, compras menores a $100).`,
  );
}
