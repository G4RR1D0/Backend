require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const http = require('http');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API REST de compras',
    endpoints: {
      usuarios: 'http://localhost:8000/usuarios',
      categorias: 'http://localhost:8000/categorias',
      productos: 'http://localhost:8000/productos',
      carritos: 'http://localhost:8000/carritos',
      detalle_carrito: 'http://localhost:8000/carrito_detalle'
    }
  });
});

const rutaUsuarios = require('./routers/route_usuario');
const rutaCategorias = require('./routers/route_categoria');
const rutaProductos = require('./routers/route_producto');
const rutaCarritos = require('./routers/route_carrito');
const rutaDetalle = require('./routers/route_carrito_detalle');

app.use('/usuarios', rutaUsuarios);
app.use('/categorias', rutaCategorias);
app.use('/productos', rutaProductos);
app.use('/carritos', rutaCarritos);
app.use('/carrito_detalle', rutaDetalle);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
