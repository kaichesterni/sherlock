'use strict';

const express     = require('express');
const port        = 8080;
const app         = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/edit', (req, res) => {
  res.render('edit');
});

app.get('/delete', (req, res) => {
  res.render('delete');
});

app.get('/help', (req, res) => {
  res.render('help');
});

app.get('/changelog', (req, res) => {
  res.render('changelog');
});

app.listen(port, () => {
  console.log('Sherlock listening on port', port);
});