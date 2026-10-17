const usuarios = ["demo@correo.com", "ana@correo.com"];

// Genera un codigo de recuperacion si el correo existe
function recuperarClave(correo) {
  if (!usuarios.includes(correo)) {
    return "Error: el correo no esta registrado";
  }
  const codigo = Math.floor(100000 + Math.random() * 900000);
  return "Codigo de recuperacion enviado: " + codigo;
}

console.log(recuperarClave("demo@correo.com"));
console.log(recuperarClave("noexiste@correo.com"));

module.exports = { recuperarClave };