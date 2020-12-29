const router = require('express').Router();

const dashboard = require('../controllers/dashboard');

router.get('/dashboard/customerSalesSummary', dashboard.customerSalesSummary);

router.get('/dashboard/accountSalesSummary', dashboard.accountSalesSummary);

router.get('/dashboard/operationSalesSummary', dashboard.operationSalesSummary);

router.get('/dashboard/betterAccount', dashboard.betterAccount);

router.get('/dashboard/betterOperation', dashboard.betterOperation);

router.get('/dashboard/betterDispenser', dashboard.betterDispenser);

module.exports =  router;

