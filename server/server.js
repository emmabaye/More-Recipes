const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

dotenv.config();

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log('Server listening on port ', port);
});

module.exports = app;
