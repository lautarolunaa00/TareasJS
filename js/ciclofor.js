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

// 4. Gestor de "Horas de Estudio" ------------------------------
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
// Función para pedir horas válidas (Flecha)
const pedirHorasValidas = (dia) => {
  let horas;
  // Usamos do...while para no repetir el prompt dos veces
  do {
    horas = Number(prompt(`¿Cuántas horas estudiaste el ${dia}?`));
    if (isNaN(horas) || horas < 0) {
      console.log(
        "⚠️ Ingresá un número positivo (no se permiten valores negativos ni letras).",
      );
    }
  } while (isNaN(horas) || horas < 0);
  return horas;
};

let totalHoras = 0;

for (let dia = 0; dia < 7; dia++) {
  let horas = pedirHorasValidas(diasSemana[dia]);
  totalHoras += horas;
}

let promedio = totalHoras / 7;
console.log(`\n📊 Total de horas de la semana: ${totalHoras}`);
console.log(`📈 Promedio diario: ${promedio.toFixed(1)} horas`);
