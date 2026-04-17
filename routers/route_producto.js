const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', async (req, res) => {
  try {
    const data = await db.tbc_productos.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await db.tbc_productos.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await db.tbc_productos.update(req.body, {
      where: { id_producto: req.params.id } 
    });
    res.json({ mensaje: 'Producto actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await db.tbc_productos.destroy({
      where: { id_producto: req.params.id } 
    });
    res.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;