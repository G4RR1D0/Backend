const categoriacontroller =require('../controllers/controller_categoria');

module.exports =(app) =>{
    app.get('/api/categorias', categoriacontroller.list);
    app.get('/api/categoria/: nombre', categoriacontroller.find);
    app.post('/api/categoria/', categoriacontroller.create);
    app.put('/api/categoria/:id', categoriacontroller.update);
    app.delete('/api/categoria/:id', categoriacontroller.delete);

}
