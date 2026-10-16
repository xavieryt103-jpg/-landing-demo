// Devuelve true solo si usuario Y clave son correctos
function login(usuario, clave) {
  return usuario === "admin" && clave === "1234";
}

console.log("admin con clave incorrecta:", login("admin", "0000"));

module.exports = { login };