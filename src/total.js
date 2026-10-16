// Devuelve el total del pedido con IGV incluido
function calcularTotal(pedido) {
  const subtotal = pedido.items.reduce((t, i) => t + i.precio, 0);
  return subtotal * 1.18;
}

module.exports = { calcularTotal };