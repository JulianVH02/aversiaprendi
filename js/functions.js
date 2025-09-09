function validarformulario() {

var nombre = document.getElementById("nombre").value.trim();
var correo = document.getElementById("correo").value.trim();
var celular = document.getElementById("celular").value.trim();
var contraseña = document.getElementById("contraseña").value.trim();
var confirmar = document.getElementById("confirmar").value.trim();

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexCelular = /^\d{10}$/;

if (!nombre || !correo || !celular || !contraseña || !confirmar) {
    alert("Por favor, completa todos los campos");
    return;
}

if (!regexCorreo.test(correo)) {
    alert("Escribe un correo electronico valido");
    return;
}

if (!regexCelular.test(celular)) {
    alert("Digita un numero de celular valido");
    return;
}

if (contraseña.length < 6) {
    alert("La contraseña debe ser de minimo 6 caracteres");
    return;
}

if (contraseña !== confirmar) {
    alert("Las contraseñas no coinciden");
    return;
}
alert("Formulario enviado con exito uwu")
document.getElementById("formulario").submit()

}