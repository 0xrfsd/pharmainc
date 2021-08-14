const express = require('express');
const app = express();

const mongoose = require('mongoose');

const porta = 3333;

app.get('/', async (req, res) => {
  try {
    res.send({"message": "welcome to my server"});
  } catch(e) {
    console.warn(e);
  } 
})

app.listen(porta, () => console.log(`Servidor rodando na porta:`, porta));
