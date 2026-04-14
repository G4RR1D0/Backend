const { create, update } = require("./controller_categoria");

const {tbc_carrito_detalle} = requiere ('../models');

module.exports ={
    create(req , res){
        return tbc_carrito_detalle,create(req.body)
        .then(detalle =>  res.status(201).send(detalle))
        .catc(error => res.status(400).send(error));

    },
     list(_, res){
       return tbc_carrito_detalle.create(req.body)
            .then(detalle => res.status(201).send(detalle))
            .catch(error => res.status(400).send(error))
    },
    
    find(req, res){
        return tbc_carrito_detalle.findByPk(req.params.id)
        .then(d => d ? res.status(200).send(d) : res.status(400).send({message: 'detalle encotrado'}))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return tbc_carrito_detalle.findByPk(req.params.id)
        .then(d => d ? d.update(req.body).then(u =>  res.status(200).send(u)) : res.status(400).send({message: 'no encontrado'}))
        .catch(error => res.status(400).send(error));

    },

    delete(req,res){
        return tbc_carrito_detalle.findByPk(req.params.id)
        .then(d => d ? d.destroy().then(() => res.status(204).send()) : res.status(404).send({message: 'no encontrado'}))
        .catch(error => res.status(400).send(error));
    }


}