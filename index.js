const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for parse form data
app.use(express.static('public')); //for build static web site. All you want to return as site
app.use(morgan('tiny')); //HTTP request logger middleware

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
app.post('/home', (req, res) => {
  if (!req.body.goit) {
    return res.status(400).json({ status: 'goit parameter is required!' });
  }
  console.log(req.body);

  res.json({ javascript: 'object', body: req.body });
});

app.listen(PORT, err => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server works at port ${PORT}!`);
});
