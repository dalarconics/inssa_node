const router = require('express').Router();

const informes = require('../controllers/informes');

router.get('/informes/detailSalesByAccount', informes.detailSalesByAccount);

router.get('/informes/detailCashSalesByAccount', informes.detailCashSalesByAccount);

router.get('/informes/detailCashSalesByOperation', informes.detailCashSalesByOperation);

router.get('/informes/detailCashlessSalesByAccount', informes.detailCashlessSalesByAccount);

router.get('/informes/detailCashlessSalesByOperations', informes.detailCashlessSalesByOperations);

router.get('/informes/consolidatedTotalSales', informes.consolidatedTotalSales);

router.get('/informes/consolidatedAccountSales', informes.consolidatedAccountSales);

router.get('/informes/consolidatedOperationsSales', informes.consolidatedOperationsSales);

router.get('/informes/consolidatedDispensersSales', informes.consolidatedDispensersSales);

router.get('/informes/consolidatedProductsSales', informes.consolidatedProductsSales);

router.get('/informes/listAccounts', informes.listAccounts);

router.get('/informes/listOperations', informes.listOperations);


module.exports =  router;

