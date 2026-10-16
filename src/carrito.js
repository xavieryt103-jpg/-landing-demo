// Agrega un producto al carrito
function agregarAlCarrito(carrito, producto) {
  carrito.push(producto);
  return carrito;
}

module.exports = { agregarAlCarrito };