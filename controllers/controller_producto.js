const { tbc_productos, tbc_categorias } = require('../models');

module.exports = {

    async create(req, res) {
        try {
            const { id_categoria } = req.body;

            // 🔥 VALIDAR CATEGORÍA
            const categoria = await tbc_categorias.findByPk(id_categoria);

            if (!categoria) {
                return res.status(400).send({
                    message: "La categoría no existe"
                });
            }

            const producto = await tbc_productos.create(req.body);

            return res.status(201).send(producto);

        } catch (error) {
            console.log(error);
            return res.status(500).send({
                message: "Error al crear producto",
                error: error.message
            });
        }
    },

    list(_, res) {
        return tbc_productos.findAll()
            .then(p => res.status(200).send(p))
            .catch(e => res.status(500).send(e));
    },

    find(req, res) {
        return tbc_productos.findByPk(req.params.id)
            .then(p => p ? res.send(p) : res.status(404).send({ message: 'No encontrado' }))
            .catch(e => res.status(500).send(e));
    },

    update(req, res) {
        return tbc_productos.findByPk(req.params.id)
            .then(p => p ? p.update(req.body).then(u => res.send(u)) : res.status(404).send({ message: 'No encontrado' }))
            .catch(e => res.status(500).send(e));
    },

    delete(req, res) {
        return tbc_productos.findByPk(req.params.id)
            .then(p => p ? p.destroy().then(() => res.sendStatus(204)) : res.status(404).send({ message: 'No encontrado' }))
            .catch(e => res.status(500).send(e));
    }
};