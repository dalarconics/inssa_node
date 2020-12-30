const router = require('express').Router();

const productos = require('../controllers/productos');

router.get('/productos/getProducts', productos.getProducts);

router.get('/productos/getProduct',productos.getProduct);

router.post('/productos/postProduct', productos.postProduct);

router.put('/productos/putProduct',productos.putProduct);

router.get('/productos/deleteproductos',productos.deleteProductByCustomer);

module.exports =  router;
