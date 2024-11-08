require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const Portinha = 8080;

app.get('/token', (req, res) => {
  const Aletorio = Math.random();
  const payload = { Aletorio };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
  res.json({ AcessarToken: token });
});

app.listen(Portinha, () => {
  console.log(`Servidor rodando na porta http://localhost:${Portinha}`);
});