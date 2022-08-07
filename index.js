const express = require('express');
const app = express();

const PORT = 8081;
const STATUS_CODE = 200;

app.get('/home', (req, res) => {
  res.send('get request');
});

app.post('/home', (req, res) => {
  res.send('post request');
});

app.delete('/home', (req, res) => {
  res.send('delete request');
});

app.use((req, res) => {
  //исп если не совпадет никакой из запросов выше. Методы выше выполняються попорядку
  res.send('Unknown request');
});

app.listen(PORT, err => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server works at port ${PORT}!`);
});
