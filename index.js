const express = require('express');
const app = express();

const PORT = 8081;

app.use((req, res, next) => {
  console.log(
    `Request method: ${req.method}, 
       URL: ${req.originalUrl},
       Timing: ${new Date().toISOString()} `
  );
  next();
});

app.get('/home', (req, res) => {
  res.json({ javascript: 'object' });
});

app.listen(PORT, err => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server works at port ${PORT}!`);
});
