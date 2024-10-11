let nombre = prompt("Cuál es tu nombre?").toUpperCase();
while (nombre.length < 3) {
  nombre = prompt(
    "tu nombre es muy corto corto, ingresa al menos 3 letras",
  ).toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket");

let edad = prompt("¿Cuál es tu edad?");
if (edad < 18) {
  swal("Lo sentimos", "No puedes comprar tickets por ser menor de edad", "warning");

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = true;
    button.classList.remove("bg-green-600", "hover:bg-green-500");
    button.classList.add("bg-gray-600", "cursor-not-allowed");
  });
}

function getTickets(ciudad,) {
  if (tickets[ciudad] > 0) {
    tickets[ciudad] -= 1
    swal("Compra realizada!","Obtuviste entradas para " + ciudad, "success");
  } else {
    swal("Compra no realizada!", "Se agotaron las entradas para " + ciudad, "info");
  }
  actualizarBotones()
}

let tickets = {
  "Buenos Aires, Argentina": 100,
  "Santiago, Chile": 100,
  "São Paulo, Brasil": 1,
  "Ciudad de México, México": 0,
  "Bogotá, Colombia": 100,
};


