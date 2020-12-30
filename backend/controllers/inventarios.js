const axios = require('axios');

const inventariosControl = {};

inventariosControl.dispenserList = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modinventarios', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    console.log(data.data);
    res.json(data.data);
}

inventariosControl.dispenserInventory = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modinventarios', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            serialMaq: req.query.serialMaq
        }
    })
    console.log(data.data);
    res.json(data.data);
}



inventariosControl.putSelectInventory = async (req, res) => {
    const data = await axios.put('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modinventarios', {
        "req5g": req.body.dataInventory.req5g,
        "numsel": req.body.dataInventory.numsel,
        "serialMaq": req.body.dataInventory.serialMaq,
        "idproducto": req.body.dataInventory.idproducto,
        "canActual": req.body.dataInventory.canActual
    })
    //console.log(req.body.dataCuenta);
    res.json(data.data);
}

module.exports = inventariosControl;