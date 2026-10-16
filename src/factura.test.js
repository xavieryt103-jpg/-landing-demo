const assert = require('assert');
const { generarFactura } = require('./factura');

const resultado = generarFactura({ items: [{ precio: 100 }] }).toFixed(2);
assert.strictEqual(resultado, "118.00");

console.log("Prueba de factura OK");