let contador = 0;
const contadorSpan = document.getElementById('contador');

function contar() {
  contador++;
  contadorSpan.textContent = contador;
}

document.addEventListener('click', contar);