function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultadoIMC");

  if (!altura || !peso || altura <= 0 || peso <= 0) {
    resultado.textContent = "Preencha os valores corretamente.";
    return;
  }

  const imc = peso / (altura * altura);
  resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;
}
