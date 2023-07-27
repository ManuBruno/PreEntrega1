alert(
  "Bienvenido a LessCo2, te ayudaremos a viajar compartiendo gastos y reduciendo el Co2"
);

let nombre = prompt("Ingresa tu nombre completo para continuar");
let edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18) {
  agenciaDeViajes();
} else {
  alert(`Lo siento ${nombre} el servicio es solo para mayores de edad`);
}

function agenciaDeViajes() {
  alert(
    `${nombre} estos son nuestros destinos disponibles:\n\n- Del Campillo\n- Río Cuarto\n- Córdoba `
  );
  const destino = prompt(
    "Ingrese el destino al que desea viajar (Ejemplo: del campillo):"
  ).toLowerCase();
  switch (destino) {
    case "del campillo":
      alert(
        "Excelente, ahora revisaremos en nuestra base de datos las opciones disponibles hacia Del Campillo"
      );
      break;
    case "rio cuarto":
      alert(
        "Excelente, ahora revisaremos en nuestra base de datos las opciones disponibles hacia Río Cuarto"
      );
      break;
    case "cordoba":
      alert(
        "Excelente, ahora revisaremos en nuestra base de datos las opciones disponibles hacia Córdoba"
      );
      break;
    default:
      alert("Lo siento, no existen viajes hacia ese destino.");
      break;
  }
}
