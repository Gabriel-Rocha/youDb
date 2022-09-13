const { Router } = require('express');

const CepController = require('./app/controllers/CepController');

const router = Router();

router.get('/cep', CepController.index);
router.get('/cep/:id', CepController.show);
router.post('/adfasdf', CepController.store);
router.get('/saveAll', CepController.saveAll);
router.delete('/cep/:id', CepController.delete);

module.exports = router;
