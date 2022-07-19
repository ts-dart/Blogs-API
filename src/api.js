const express = require('express');

// ...
const app = express();
const bodyParser = require('body-parser');
const LoginRoutes = require('./routes/LoginRoutes');
const UserRoutes = require('./routes/UserRoutes');
const CategoriesRoutes = require('./routes/CategoriesRoutes');

app.use(express.json());
app.use(bodyParser.json());

// ...
app.use('/login', LoginRoutes);
app.use('/user', UserRoutes);
app.use('/categories', CategoriesRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
