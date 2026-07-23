const express = require('express');
const pool = require('../db');

const router = express.Router();

// Relatório mensal
router.get('/monthly/:mes/:ano', async (req, res) => {
  try {
    const { mes, ano } = req.params;
    
    // TODO: Implementar relatório
    res.json({ message: 'Relatório em desenvolvimento' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Relatório por loja
router.get('/by-loja/:lojaId/:mes/:ano', async (req, res) => {
  try {
    const { lojaId, mes, ano } = req.params;
    
    // TODO: Implementar relatório
    res.json({ message: 'Relatório em desenvolvimento' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;