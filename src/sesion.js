// Valida el inicio de sesion
function iniciarSesion(usuario, clave) {
  return usuario === "admin" && clave === "1234";
}

console.log("Sesion correcta:", iniciarSesion("admin", "1234"));
console.log("Sesion incorrecta:", iniciarSesion("admin", "0000"));

module.exports = { iniciarSesion };