const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = await db.tbc_carrito_detalle.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await db.tbc_carrito_detalle.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await db.tbc_carrito_detalle.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ mensaje: 'Actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.tbc_carrito_detalle.destroy({
      where: { id: req.params.id }
    });
    res.json({ mensaje: 'Eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;