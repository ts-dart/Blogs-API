const express = require('express');

// ...
const app = express();
const bodyParser = require('body-parser');
const LoginRoutes = require('./routes/LoginRoutes');

app.use(express.json());
app.use(bodyParser.json());

// ...
app.use('/login', LoginRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
