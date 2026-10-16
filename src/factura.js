const { calcularTotal } = require('./total');

// Genera la factura. calcularTotal() ya devuelve el total con IGV incluido,
// por eso aqui NO se vuelve a sumar el IGV.
function generarFactura(pedido) {
  return calcularTotal(pedido);
}

console.log("Total factura:", generarFactura({ items: [{ precio: 100 }] }).toFixed(2));

module.exports = { generarFactura };