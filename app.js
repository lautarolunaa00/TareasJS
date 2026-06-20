console.log("\n===== TAREA 3: RESTAURANTE =====");

// Pedimos al usuario qué menú desea y lo pasamos a minúsculas
let menuElegido = prompt("¿Qué deseas pedir? (carne / pescado / verdura):");
menuElegido = menuElegido.toLowerCase();

// Según el menú elegido, ofrecemos una bebida diferente
switch (menuElegido) {
  case "carne":
    console.log("🍷 Se le ofrece vino tinto para acompañar su carne");
    break;
  case "pescado":
    console.log("🍾 Se le ofrece vino blanco para acompañar su pescado");
    break;
  case "verdura":
    console.log("💧 Se le ofrece agua para acompañar su verdura");
    break;
  default:
    console.log("⚠️ Elija carne, pescado o verdura");
    break;
}
