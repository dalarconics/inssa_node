const router = require('express').Router();

const cuentas = require('../controllers/cuentas');

router.get('/cuentas/getAccounts', cuentas.getAccounts);

router.get('/cuentas/getAccount', cuentas.getAccount);

router.post('/cuentas/postAccount', cuentas.postAccount);

router.put('/cuentas/putAccount', cuentas.putAccount);

module.exports =  router;

