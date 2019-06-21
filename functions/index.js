const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// const gmailEmail = encodeURIComponent(functions.config().gmail.email);
// const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const gmailEmail = "androstoic@gmail.com";
const gmailPassword = "darkluk2a8";

const mailTransport = nodemailer.createTransport(
  `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`
);

// exports.enviarCorreo = functions.https.onRequest((req, res) => {
//   console.log(req.query);
//   let datos = req.query;
//   sendMailConsulta(datos);
// });

// function sendMailConsulta(datos) {
//   const mailOptions = {
//     from: `Bach Flower Chile <noreply@firebase.com>`,
//     to: datos.email,
//     html: `<p>aaaaaaaaaaa</p>`
//   };

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Bienvenido a izinait!`;
//   mailOptions.text = ``;
//   mailTransport.sendMail(mailOptions, function(err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });
// }

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
