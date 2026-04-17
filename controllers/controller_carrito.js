const { tbc_carrito } = require('../models');

module.exports = {
    create(req, res) {
        return tbc_carrito.create(req.body)
            .then(carrito => res.status(201).send(carrito))
            .catch(error => res.status(400).send(error));
    },
    list(_, res) {
        return tbc_carrito.findAll()
            .then(carritos => res.status(200).send(carritos))
            .catch(error => res.status(400).send(error));
    },
    find(req, res) {
        return tbc_carrito.findByPk(req.params.id)
            .then(c => c ? res.status(200).send(c) : res.status(404).send({message: 'Carrito no encontrado'}))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return tbc_carrito.findByPk(req.params.id)
            .then(c => {
                if (!c) return res.status(404).send({message: 'No encontrado'});
                return c.update(req.body).then(u => res.status(200).send(u));
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return tbc_carrito.findByPk(req.params.id)
            .then(c => {
                if (!c) return res.status(404).send({message: 'No encontrado'});
                return c.destroy().then(() => res.status(204).send());
            })
            .catch(error => res.status(400).send(error));
    } 
};