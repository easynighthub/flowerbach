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

console.log("hooola");

var estatica = false;
var estatica2 = false;
var estatica3 = false;

$(window).on("scroll", function() {
  var section1 = document.getElementById("section1");
  var quienesSomos = document.getElementById("quienesSomos");
  var servicios = document.getElementById("servicios");

  var section1 = esVisible(section1);

  console.log(section1);

  if (section1 && !estatica) {
    estatica = true;
    ponerAnimacion();
    setTimeout("sacarAnimacion();", 5000);
  }

  var quienesSomos = esVisible(quienesSomos);

  if (quienesSomos && !estatica2) {
    estatica2 = true;
    $("#hTextQuienesSomos").addClass(
      "animated infinite bounceInRight delay-1s"
    );
    setTimeout(
      ' $("#hTextQuienesSomos").removeClass("animated infinite bounceInRight delay-1s");',
      2000
    );
  }
  var servicios = esVisible(servicios);

  if (servicios && !estatica3) {
    estatica3 = true;
    $("#hTextServicios").addClass("animated infinite bounceInLeft delay-1s");
    setTimeout(
      ' $("#hTextServicios").removeClass("animated infinite bounceInLeft delay-1s");',
      2000
    );
  }

  if (section1 == false) {
    estatica = false;
  }
  if (quienesSomos == false) {
    estatica2 = false;
  }
  if (servicios == false) {
    estatica3 = false;
  }
});

function ponerAnimacion() {
  $("#iconUbicacion").addClass("animated infinite bounce delay-1s");
  $("#iconLlamar").addClass("animated infinite bounce delay-1s");
  $("#iconMensaje").addClass("animated infinite bounce delay-1s");
}

function sacarAnimacion() {
  console.log("para");
  $("#iconUbicacion").removeClass("animated infinite bounce delay-1s");
  $("#iconLlamar").removeClass("animated infinite bounce delay-1s");
  $("#iconMensaje").removeClass("animated infinite bounce delay-1s");
}

function esVisible(elem) {
  /* Ventana de Visualización*/
  var posTopView = $(window).scrollTop();
  var posButView = posTopView + $(window).height();
  /* Elemento a validar*/
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  /* Comparamos los dos valores tanto del elemento como de la ventana*/
  return (
    (elemBottom < posButView && elemBottom > posTopView) ||
    (elemTop > posTopView && elemTop < posButView)
  );
}

var servicios = document.getElementById("servicios");
var servicios = esVisible(servicios);
if (servicios && !estatica3) {
  estatica3 = true;
  $("#hTextServicios").addClass("animated infinite bounceInLeft delay-1s");
  setTimeout(
    ' $("#hTextServicios").removeClass("animated infinite bounceInLeft delay-1s");',
    3000
  );
}
