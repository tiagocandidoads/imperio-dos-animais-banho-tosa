const express = require('express');
const pool = require('../db');

const router = express.Router();

// Registrar banho/tosa
router.post('/register', async (req, res) => {
  try {
    const { loja_id, tipo, data, quantidade } = req.body;

    if (!loja_id || !tipo || !data || !quantidade) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    // TODO: Implementar registro no banco
    res.json({ message: 'Registro em desenvolvimento' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar serviços por período
router.get('/by-period/:lojaId/:mes/:ano', async (req, res) => {
  try {
    const { lojaId, mes, ano } = req.params;
    
    // TODO: Implementar busca no banco
    res.json({ message: 'Busca em desenvolvimento' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;