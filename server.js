const express = require('express');
const request = require('request');
const morgan = require('morgan');
const path = require('path');
const db = require('./db/pg');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.sendFile('/index.html')
})

app.listen(port, () => {
  console.log('Hellloooooooo Sexyyy! ', port);
});
