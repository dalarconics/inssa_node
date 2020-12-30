const axios = require('axios');

const productosControl = {};


productosControl.getProducts = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modproductos', {
        params: {
            "req5g": req.query.req5g,
            "idcliente": req.query.idcliente,
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


productosControl.getProduct = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modproductos', {
        params: {
            "req5g": req.query.req5g,
            "idcliente": req.query.idCliente,
            "idProd": req.query.idProd
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

productosControl.postProduct = async (req, res) => {
    const data = await axios.post('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modproductos', {
        "req5g": req.body.dataProductos.req5g,
        "idCliente": req.body.dataProductos.idCliente,
        "nomProd": req.body.dataProductos.nomProd,
        "costoProd": req.body.dataProductos.costoProd,
        "codigoPro": req.body.dataProductos.codigoPro,
        "descripPro": req.body.dataProductos.descripPro,
        "idTProd": req.body.dataProductos.idTProd,
        "nomTProd": req.body.dataProductos.nomTProd,
        "rentProd": req.body.dataProductos.rentProd,
        "plistaProd": req.body.dataProductos.plistaProd,
        "psugProd": req.body.dataProductos.psugProd
    })
    //console.log(data.data);
    res.json({ "rta": 1 });

    
}

productosControl.putProduct = async (req, res) => {
    const data = await axios.put('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modproductos', {
        "req5g": req.body.dataProducto.req5g,
        "idCliente": req.body.dataProducto.idClientee,
        "idProd": req.body.dataProducto.idProductoe,
        "nomProde": req.body.dataProducto.nombreProductoe,
        "costoProde": req.body.dataProducto.costoProductoe,
        "codigoProe": req.body.dataProducto.codigoProductoe,
        "descripProe": req.body.dataProducto.desProductoe,
        "idTProde": '1',
        "nomTProde": req.body.dataProducto.tProductoe,
        "rentProde": req.body.dataProducto.rentabilidadProductoe,
        "plistaProde": req.body.dataProducto.plistaProductoe,
        "psugProde": req.body.dataProducto.psugeridoe
    })
    //console.log(data);
    res.json(data.data);
}


productosControl.deleteProductByCustomer = async (req, res) => {
    const httpReqHeaders = {
        'Content-Type': 'application/json'
    };
    const data = await axios.post('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modproductos', {

        "req5g": "deleteProductos",
        "idCliente": req.query.idCliente,
        "idProducto": req.query.idProd
    }, httpReqHeaders)
    //console.log(data.data);
    res.json(data.data);
}




module.exports = productosControl;