const { calcularTotal } = require('./total');

// Genera la factura: subtotal + IGV
function generarFactura(pedido) {
  const subtotal = calcularTotal(pedido);
  const igv = subtotal * 0.18;
  return subtotal + igv;
}

console.log("Total factura:", generarFactura({ items: [{ precio: 100 }] }).toFixed(2));

module.exports = { generarFactura };
