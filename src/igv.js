// Calculo correcto del IGV (18%)
function calcularIGV(subtotal) {
  return subtotal * 0.18;
}

console.log("IGV de 100:", calcularIGV(100));

module.exports = { calcularIGV };