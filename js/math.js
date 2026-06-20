console.log("\n===== TAREA 2: ADIVINA EL NÚMERO =====");

// Generamos un número aleatorio entre 1 y 10 que el usuario no conoce
let numeroSecreto = Math.ceil(Math.random() * 10);

// Pedimos al usuario que intente adivinar y lo convertimos a número
let numeroIngresadoUsuario = prompt("Ingrese un número entre 1 y 10:");
numeroIngresadoUsuario = Number(numeroIngresadoUsuario);

// Comparamos si acertó o no
if (numeroIngresadoUsuario === numeroSecreto) {
  console.log(`🎉 ¡Ganaste! El número era ${numeroSecreto}`);
} else {
  console.log(
    `😢 Perdiste. El número era ${numeroSecreto}, tú ingresaste ${numeroIngresadoUsuario}`,
  );
}
