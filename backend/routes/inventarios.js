const router = require('express').Router();

const inventarios = require('../controllers/inventarios');

router.get('/inventarios/dispenserList', inventarios.dispenserList);

router.get('/inventarios/dispenserInventory', inventarios.dispenserInventory);

router.put('/inventarios/putSelectInventory', inventarios.putSelectInventory);

module.exports =  router;

