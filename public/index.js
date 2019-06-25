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

// // $("#buttonDrEdwardBach").addClass(
// //   "animated infinite bounceInRight   slow  delay-1s"
// // );
// $("#buttonQueSonLasFloresDeBach").addClass(
//   "animated infinite bounceInDown    slow delay-1s"
// );
// $("#buttonSieteGruposFlorales").addClass(
//   "animated infinite bounceInDown   slow delay-1s"
// );
// $("#buttonRemediosDeBach").addClass(
//   "animated infinite bounceInLeft    slow delay-1s"
// );

// var servicios = document.getElementById("servicios");
// var servicios = esVisible(servicios);
// if (servicios && !estatica3) {
//   estatica3 = true;
//   $("#hTextServicios").addClass("animated infinite bounceInLeft delay-1s slow");
//   setTimeout(
//     ' $("#hTextServicios").removeClass("animated infinite bounceInLeft delay-1s slow");',
//     3500
//   );
// }

animateCSS("#buttonDrEdwardBach", "bounceInDown");
animateCSS("#buttonQueSonLasFloresDeBach", "bounceInDown");
animateCSS("#buttonSieteGruposFlorales", "bounceInDown");
animateCSS("#buttonRemediosDeBach", "bounceInDown");
animateCSS("#hTextServicios", "bounceInLeft");

// setTimeout("sacarAnimacionInicio();", 4500);

var estatica = false;
var estatica2 = false;
var estatica3 = false;
var estatica4 = true;

$(window).on("scroll", function() {
  var section1 = document.getElementById("section1");
  var quienesSomos = document.getElementById("quienesSomos");
  var servicios = document.getElementById("servicios");
  var buttonInformacion = document.getElementById("buttonInformacion");

  var section1 = esVisible(section1);

  console.log(section1);

  if (section1 && !estatica) {
    estatica = true;
    ponerAnimacion();
    // setTimeout("sacarAnimacion();", 5000);
  }

  var quienesSomos = esVisible(quienesSomos);

  if (quienesSomos && !estatica2) {
    estatica2 = true;
    animateCSS("#hTextQuienesSomos", "bounceInRight");
    // $("#hTextQuienesSomos").addClass(
    //   "animated infinite bounceInRight delay-1s"
    // );
    // setTimeout(
    //   ' $("#hTextQuienesSomos").removeClass("animated infinite bounceInRight delay-1s");',
    //   2000
    // );
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

  var buttonInformacion = esVisible(buttonInformacion);
  if (buttonInformacion && !estatica4) {
    estatica4 = true;
    animateCSS("#buttonDrEdwardBach", "bounceInDown");
    animateCSS("#buttonQueSonLasFloresDeBach", "bounceInDown");
    animateCSS("#buttonSieteGruposFlorales", "bounceInDown");
    animateCSS("#buttonRemediosDeBach", "bounceInDown");
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
  if (buttonInformacion == false) {
    estatica4 = false;
  }
});

function ponerAnimacion() {
  animateCSS("#iconUbicacion", "bounce");
  animateCSS("#iconLlamar", "bounce");
  animateCSS("#iconMensaje", "bounce");

  // $("#iconUbicacion").addClass("animated infinite bounce delay-1s  slow");
  // $("#iconLlamar").addClass("animated infinite bounce delay-1s slow");
  // $("#iconMensaje").addClass("animated infinite bounce delay-1s slow");
}

function sacarAnimacion() {
  console.log("para");
  $("#iconUbicacion").removeClass("animated infinite bounce delay-1s");
  $("#iconLlamar").removeClass("animated infinite bounce delay-1s");
  $("#iconMensaje").removeClass("animated infinite bounce delay-1s");
}
function sacarAnimacionInicio() {
  console.log("asd");
  $("#buttonDrEdwardBach").removeClass(
    "animated infinite bounceInDown   slow "
  );
  $("#buttonQueSonLasFloresDeBach").removeClass(
    "animated infinite bounceInDown   slow"
  );
  $("#buttonSieteGruposFlorales").removeClass(
    "animated infinite bounceInDown   slow"
  );
  $("#buttonRemediosDeBach").removeClass(
    "animated infinite bounceInDown   slow"
  );
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

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add("animated", animationName, "slow");

  function handleAnimationEnd() {
    node.classList.remove("animated", animationName);
    node.removeEventListener("animationend", handleAnimationEnd, "slow");

    if (typeof callback === "function") callback();
  }

  node.addEventListener("animationend", handleAnimationEnd);
}

$("#buttonContacto").click(function() {
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      key: "4c46b6d9f8a1262f5b0b8b5c4c99a0c6-us3",
      message: {
        from_email: "androstoic@gmail.com",
        to: [
          {
            email: "androstoic@gmail.com",
            name: "RECIPIENT NAME (OPTIONAL)",
            type: "to"
          }
          // {
          //   'email': 'RECIPIENT_NO_2@EMAIL.HERE',
          //   'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
          //   'type': 'to'
          // }
        ],
        autotext: "true",
        subject: "YOUR SUBJECT HERE!",
        html: "YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!"
      }
    }
  }).done(function(response) {
    console.log(response); // if you're into that sorta thing
  });
});
