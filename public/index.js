document.getElementById("mapa").addEventListener("click", abrirMapa);
document.getElementById("llamar").addEventListener("click", hacerLLamar);
document.getElementById("mensaje").addEventListener("click", enviarMensaje);
document
  .getElementById("botonAbrirModalTelefonos")
  .addEventListener("click", ModalTelefonos);
document
  .getElementById("botonEnviarWhatsapp")
  .addEventListener("click", enviarMensajeWhatsapp);
document
  .getElementById("botonEnviarWhatsapp2")
  .addEventListener("click", enviarMensajeWhatsapp);
document
  .getElementById("botonEnviarWhatsapp3")
  .addEventListener("click", enviarMensajeWhatsapp);
document
  .getElementById("botonEnviarWhatsapp4")
  .addEventListener("click", enviarMensajeWhatsapp);

function abrirMapa() {
  console.log("abrir mapa");
  //   href="" target="_blank"
  window.open("https://goo.gl/maps/CHed5a8aS2oh8mDY6");
}

function enviarMensajeWhatsapp() {
  window.open("https://api.whatsapp.com/send?phone=56998218904");
}
function hacerLLamar() {}
function enviarMensaje() {}
function ModalTelefonos() {
  llamar.click();
}
