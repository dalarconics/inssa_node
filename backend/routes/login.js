const router = require('express').Router();

const login = require('../controllers/login');

router.post('/login/signin', login.signin);

module.exports =  router;

