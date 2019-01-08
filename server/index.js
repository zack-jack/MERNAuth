const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// App setup
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/index'));

// Server setup
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
