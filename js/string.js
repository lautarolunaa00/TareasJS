console.log("\n===== TAREA 1: TRABAJEMOS CON STRING =====");

// Pedimos al usuario que ingrese una frase y la palabra a buscar
let fraseUsuario = prompt("Ingrese una frase o texto:");
let palabraBuscadaUsuario = prompt("Ingrese la palabra que desea buscar:");

// Eliminamos los espacios en blanco al principio y al final
fraseUsuario = fraseUsuario.trim();
palabraBuscadaUsuario = palabraBuscadaUsuario.trim();

// Convertimos todo a minúsculas para ignorar si usó mayúsculas
let fraseMinuscula = fraseUsuario.toLowerCase();
let palabraMinuscula = palabraBuscadaUsuario.toLowerCase();

// Comparamos si la frase contiene la palabra y mostramos el resultado original
if (fraseMinuscula.includes(palabraMinuscula)) {
  console.log(
    `✅ La palabra "${palabraBuscadaUsuario}" SÍ se encuentra en el texto`,
  );
} else {
  console.log(
    `❌ La palabra "${palabraBuscadaUsuario}" NO se encuentra en el texto`,
  );
}
