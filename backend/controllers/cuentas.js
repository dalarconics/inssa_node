const axios = require('axios');

const cuentasControl = {};

cuentasControl.getAccounts = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modcuentas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

cuentasControl.getAccount = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modcuentas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            nitcuenta: req.query.nitcuenta
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

cuentasControl.postAccount = async (req, res) => {
    const data = await axios.post('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modcuentas', {
        "req5g": req.body.dataCuenta.req5g,
        "idCliente": req.body.dataCuenta.idCliente,
        "razonSocial": req.body.dataCuenta.razonSocial,
        "nitCuenta": req.body.dataCuenta.nitCuenta,
        "codVerCuenta": req.body.dataCuenta.codVerCuenta,
        "paisCuenta": req.body.dataCuenta.paisCuenta, 
        "ciudadCuenta": req.body.dataCuenta.ciudadCuenta,
        "direccionCuenta": req.body.dataCuenta.direccionCuenta,
        "contactoCuenta": req.body.dataCuenta.contactoCuenta,
        "telcontactoCuenta": req.body.dataCuenta.telcontactoCuenta,
        "celcontactoCuenta": req.body.dataCuenta.celcontactoCuenta,
        "emailcontactoCuenta": req.body.dataCuenta.emailcontactoCuenta
    })
    //console.log(data.data);
    res.json(data.data);
}

cuentasControl.putAccount = async (req, res) => {
    const data = await axios.put('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modcuentas', {
        "req5g": req.body.dataCuenta.req5g,
        "idClientee": req.body.dataCuenta.idClientee,
        "razonSociale": req.body.dataCuenta.razonSociale,
        "nitCuentae": req.body.dataCuenta.nitCuentae,
        "codVerCuentae": req.body.dataCuenta.codVerCuentae,
        "paisCuentae": req.body.dataCuenta.paisCuentae, 
        "ciudadCuentae": req.body.dataCuenta.ciudadCuentae,
        "direccionCuentae": req.body.dataCuenta.direccionCuentae,
        "contactoCuentae": req.body.dataCuenta.contactoCuentae,
        "telcontactoCuentae": req.body.dataCuenta.telcontactoCuentae,
        "celcontactoCuentae": req.body.dataCuenta.celcontactoCuentae,
        "emailcontactoCuentae": req.body.dataCuenta.emailcontactoCuentae
    })
    //console.log(req.body.dataCuenta);
    res.json(data.data);
}

module.exports = cuentasControl;