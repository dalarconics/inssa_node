const axios = require('axios');

const operacionesControl = {};

operacionesControl.getOperations = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modoperaciones', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

operacionesControl.getOperation = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modoperaciones', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            idoperacion: req.query.idoperacion
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

operacionesControl.postOperation = async (req, res) => {
    const data = await axios.post('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modoperaciones', {
        "req5g": req.body.dataOperacion.req5g,
        "idCliente": req.body.dataOperacion.idCliente,
        "nitcliente": req.body.dataOperacion.nitcliente,
        "nitcuenta": req.body.dataOperacion.nitcuenta,
        "nombrecuenta": req.body.dataOperacion.nombrecuenta,
        "nombreoperacion": req.body.dataOperacion.nombreoperacion,
        "paisoperacion": req.body.dataOperacion.paisoperacion, 
        "ciudadOperacion": req.body.dataOperacion.ciudadOperacion,
        "direccionoperacion": req.body.dataOperacion.direccionoperacion,
        "personaoperacion": req.body.dataOperacion.personaoperacion,
        "telefonooperacion": req.body.dataOperacion.telefonooperacion,
        "celularoperacion": req.body.dataOperacion.celularoperacion,
        "correooperacion": req.body.dataOperacion.correooperacion
    })
    //console.log(data.data);
    res.json(data.data);
}

operacionesControl.putOperation = async (req, res) => {
    const data = await axios.put('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modoperaciones', {
        "req5g": req.body.dataOperacion.req5g,
        "idCliente": req.body.dataOperacion.idCliente,
        "idOperacion": req.body.dataOperacion.idOperacion,
        "nitCuenta": req.body.dataOperacion.nitcuenta,
        "nomCuenta": req.body.dataOperacion.nombrecuenta,
        "nomOperacion": req.body.dataOperacion.nombreoperacion,
        "paisOpe": req.body.dataOperacion.paisoperacion,
        "ciudadOpe": req.body.dataOperacion.ciudadOperacion,
        "direccionOpe": req.body.dataOperacion.direccionoperacion,
        "contactoOpe": req.body.dataOperacion.personaoperacion,
        "telOpe": req.body.dataOperacion.telefonooperacion,
        "celularOpe": req.body.dataOperacion.celularoperacion,
        "correoOpe": req.body.dataOperacion.correooperacion,
        "estadoOpe": req.body.dataOperacion.activo
    })
    console.log(req.body.dataOperacion);
    res.json(data.data);
}

operacionesControl.getAccounts = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modcuentas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

module.exports = operacionesControl;