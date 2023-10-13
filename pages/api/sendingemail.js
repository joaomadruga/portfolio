const nodemailer = require('nodemailer');
require('dotenv').config();
export default async function sendMail(req, res) {
  const { name, email, service, socialMedia, message } = await req.body;

  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAILSEND,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAILSEND,
    to: process.env.EMAILTO,
    subject: 'OFERTA DE EMPREGO SITE PORTFOLIO',
    text: `Senhor(a) ${name} enviou uma mensagem com os seguintes dados:\n\nNOME: ${name}\nEMAIL: ${email}\nSERVIÇO: ${service}\nREDE SOCIAL: ${socialMedia}\nMENSAGEM: ${message}`,
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.json({ 'resposta': 'error' })
      console.error(error)
    } else {
      res.json({ 'resposta': 'enviado' })
      console.log('Email sent')
    }
  });
}
    
