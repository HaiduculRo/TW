const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/proiectTW')));

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.get('/index_style.css', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'index_style.css'));
});

app.get('/index_script.js', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'index_script.js'));
});

app.get('/General_Charles_de_Gaulle_in_1945.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'General_Charles_de_Gaulle_in_1945.jpg'));
});

app.get('/MarieCC.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'MarieCC.jpg'));
});

app.get('/Napoleon_in_His_Study.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'Napoleon_in_His_Study.jpg'));
});

app.get('/Hcontacte.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'Hcontacte.html'));
});

app.get('/contacte_style.css', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'contacte_style.css'));
});

app.get('/contacte.js', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'contacte.js'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/index.html');
});

app.use(function(req, res) {
  res.status(404).sendFile(path.join(__dirname, '', '404.html'));
});