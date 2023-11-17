function generarNum() {
  const numGenerado = Math.floor(Math.random() * 100) + 1;

  document.getElementById("input").value = numGenerado;
}

function agregarNum() {
  const numero = document.getElementById("input").value;
  if (input !== "") {
    const tabla = document.getElementById("tabla");
    const fila = tabla.insertRow(-1);
    const celda = fila.insertCell(0);
    celda.innerHTML = numero;
  }
}
function calEstadistica() {
  const promedio = calPromedio();
  const total = calTotal();
  const maximo = calMaximo();
  const minimo = calMinimo();

  document.getElementById("promedio").innerHTML = "Promedio: " + promedio;
  document.getElementById("total").innerHTML = "Total: " + total;
  document.getElementById("maximo").innerHTML = "Máximo: " + maximo;
  document.getElementById("minimo").innerHTML = "Mínimo: " + minimo;
}

function calPromedio() {
  if (numero.length === 0) return 0;
  const suma = numGenerado.reduce(function (a, b) {
    return a + b;
  });
  return suma / numGenerado.length;
}

function calTotal() {
  if (numero.length === 0) return 0;
  return numero.reduce(function (a, b) {
    return a + b;
  });
}

function calMaximo() {
  if (numero.length === 0) return 0;
  return Math.max(...numGenerado);
}

function calMinimo() {
  if (numero.length === 0) return 0;
  return Math.min(...numero);
}
