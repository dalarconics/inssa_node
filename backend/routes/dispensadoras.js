const router = require('express').Router();

const dispensadoras = require('../controllers/dispensadoras');

router.get('/dispensadoras/getDispensers', dispensadoras.getDispensers);

router.get('/dispensadoras/getDispenser', dispensadoras.getDispenser);

router.post('/dispensadoras/postDispenser', dispensadoras.postDispenser);

router.put('/dispensadoras/putDispenser', dispensadoras.putDispenser);

router.get('/dispensadoras/getAccounts', dispensadoras.getAccounts);

router.get('/dispensadoras/getoperations', dispensadoras.getoperations);

module.exports =  router;