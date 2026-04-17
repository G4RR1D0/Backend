const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = await db.tbc_usuarios.findAll();
    res.json(data);
  } catch (error) {
    console.error('ERROR GET:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await db.tbc_usuarios.create(req.body);
    res.json(data);
  } catch (error) {
    console.error('ERROR POST:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await db.tbc_usuarios.update(req.body, {
      where: { id_usuario: req.params.id }
    });
    res.json({ mensaje: 'Actualizado correctamente' });
  } catch (error) {
    console.error('ERROR PUT:', error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.tbc_usuarios.destroy({
      where: { id_usuario: req.params.id }
    });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    console.error('ERROR DELETE:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;