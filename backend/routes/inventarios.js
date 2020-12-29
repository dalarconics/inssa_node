const router = require('express').Router();

const inventarios = require('../controllers/inventarios');

router.get('/inventarios/dispenserList', inventarios.dispenserList);
router.get('/inventarios/dispenserInventory', inventarios.dispenserInventory);


module.exports =  router;
