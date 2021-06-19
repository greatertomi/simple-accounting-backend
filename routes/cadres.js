const { Router } = require('express');
const cadresController = require('../controllers/cadres');

const router = Router();

router.get('/', cadresController.getCadres);

router.get('/:id', cadresController.getCadre);

router.post('/', cadresController.createNewCadre);

module.exports = router;
