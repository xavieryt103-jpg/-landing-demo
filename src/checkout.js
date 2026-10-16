const { aplicarDescuento } = require('./descuento');

// Total a pagar = precio - monto del descuento
// aplicarDescuento() devuelve el MONTO del descuento, no el precio final
function totalAPagar(precio) {
  return precio - aplicarDescuento(precio);
}

console.log("Total a pagar por 100:", totalAPagar(100));

module.exports = { totalAPagar };