require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

// Crear app PRIMERO
const app = express();

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => res.status(200).send({
    message: 'Bienvenido a la API REST de compras.',
}));

const rutaCategoria = require('./routers/route_categoria');
app.use('/categorias', rutaCategoria);

// Puerto
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

// Servidor
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;