const { aplicarDescuento } = require('./descuento');

// Total a pagar: usa aplicarDescuento esperando el precio final
function totalAPagar(precio) {
  return aplicarDescuento(precio);
}

console.log("Total a pagar por 100:", totalAPagar(100));

module.exports = { totalAPagar };