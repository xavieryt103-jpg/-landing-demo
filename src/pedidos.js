function calcularTotalPedido(pedido) {
  const subtotal = pedido.items.reduce((t, i) => t + i.precio, 0);
  return subtotal - pedido.descuento + pedido.envio;
}
console.log(calcularTotalPedido({ items: [{ precio: 10 }, { precio: 5 }], descuento: 2, envio: 3 }));