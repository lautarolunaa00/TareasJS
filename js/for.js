// 1. Mostrar números del 1 al 10.
console.log("\n🔢 Ejercicio 1: Números del 1 al 10");
// El ciclo se repetirá 10 veces, la variable 'numero' tomará los valores del 1 al 10.
for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

// 2. Tabla de multiplicar de un número.
console.log("\n✖️ Ejercicio 2: Tabla de multiplicar");
let numeroTabla = Number(
  prompt("🤖 ¡Hola! Ingresá un número para ver su tabla de multiplicar:")
);

// Comprobamos si el valor ingresado es válido
if (numeroTabla && !isNaN(numeroTabla)) {
  // El ciclo se repetirá 10 veces, el 'contador' irá del 1 al 10 para hacer las multiplicaciones.
  for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numeroTabla} x ${contador} = ${numeroTabla * contador}`);
  }
} else {
  console.log("⚠️ No ingresaste un número válido.");
}

// 3. Suma de los primeros 10 números.
console.log("\n➕ Ejercicio 3: Suma de los primeros 10 números");
let suma = 0; // Usamos una variable descriptiva (como dice la lista de buenas prácticas)

// El ciclo se repetirá 10 veces, sumando el valor de 'numeroActual' a la 'suma'
for (let numeroActual = 1; numeroActual <= 10; numeroActual++) {
  suma += numeroActual; // Acumulamos el valor en la variable 'suma' usando +=
}

console.log(`La suma total es: ${suma} 🎉`);
