// Registro de clientes - probado
function registrarCliente(nombre) {
  return "Cliente registrado: " + nombre;
}

console.log(registrarCliente("Ana"));

module.exports = { registrarCliente };