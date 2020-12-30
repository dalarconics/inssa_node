const router = require('express').Router();

const operaciones = require('../controllers/operaciones');

router.get('/operaciones/getOperations', operaciones.getOperations);

router.get('/operaciones/getOperation', operaciones.getOperation);

router.post('/operaciones/postOperation', operaciones.postOperation);

router.put('/operaciones/putOperation', operaciones.putOperation);

router.get('/operaciones/getAccounts', operaciones.getAccounts);

module.exports =  router;

