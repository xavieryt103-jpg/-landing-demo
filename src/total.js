// Devuelve el subtotal del pedido (sin IGV)
function calcularTotal(pedido) {
  return pedido.items.reduce((t, i) => t + i.precio, 0);
}

module.exports = { calcularTotal };