const carritocontroller = requiere('../controllers/controller_carrito');

module.exports =(app) => {
    app.get('/api/carritocontroller', carritocontroller.list);
    app.get('/api/carrito/id',carritocontroller.find);
    app.get('/api/carritos')

}