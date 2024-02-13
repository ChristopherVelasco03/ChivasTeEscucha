const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
let comentarios = [];

app.get('/', (req, res) => {
  res.render('index', { comentarios });
});

app.post('/agregar-comentario', (req, res) => {
  const nuevoComentario = req.body.comentario;
  comentarios.push(nuevoComentario);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});

