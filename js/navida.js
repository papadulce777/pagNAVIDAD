var totalComida = 0;

function mostrarSeccion(idSeccion) {
  var secciones = document.getElementsByClassName("seccion");
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove("activa");
  }
  document.getElementById(idSeccion).classList.add("activa");
}

function verDescripcion(idDesc) {
  var elemento = document.getElementById(idDesc);
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}

function agregarRegalo() {
  var input = document.getElementById("inputRegalo");
  var texto = input.value.trim();

  if (texto === "") {
    return;
  }

  var lista = document.getElementById("listaRegalos");
  var nuevoItem = document.createElement("li");
  nuevoItem.textContent = texto;
  lista.appendChild(nuevoItem);

  input.value = "";
}

function limpiarRegalos() {
  document.getElementById("listaRegalos").innerHTML = "";
}

function agregarAlCarrito(nombrePlato, precio) {
  var listaCarrito = document.getElementById("listaCarrito");
  var item = document.createElement("li");
  item.textContent = nombrePlato + " - $" + precio;
  listaCarrito.appendChild(item);

  totalComida = totalComida + precio;
  document.getElementById("totalCarrito").textContent = totalComida;
}

function vaciarCarrito() {
  document.getElementById("listaCarrito").innerHTML = "";
  totalComida = 0;
  document.getElementById("totalCarrito").textContent = 0;
}