const express = require('express');
const request = require('request');

require('./database');

const app = express();

const porta = 3333;

const url = 'https://www.randomuser.me/api/';

// criar esquema de usuario com mongoose createSchema
// manter todos parametros dos dados que estamos puxando =+ 2 
// passar parametro imported_t recebendo New Date()
// passar parametro status do tipo Enum recebendo os possiveis valores = ['draft', 'trash', 'publicado']

app.get('/', async (req, res) => {
  try {
    res.send({"message": "welcome to my server"});
  } catch(e) {
    console.warn(e);
  } 
})

app.listen(porta, () => console.log(`Servidor rodando na porta:`, porta));
