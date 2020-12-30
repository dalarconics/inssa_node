const axios = require('axios');

const dispensadorasControl = {};

dispensadorasControl.getDispensers = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/moddispensadoras', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

dispensadorasControl.getDispenser = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/moddispensadoras', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            serialDisp: req.query.serialDisp
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

dispensadorasControl.postDispenser = async (req, res) => {
    const data = await axios.post('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/moddispensadoras', {
        "req5g": req.body.dataDispensadora.req5g,
        "idCliente": req.body.dataDispensadora.idCliente,
        "nitcliente": req.body.dataDispensadora.nitcliente,
        "razonsocial": req.body.dataDispensadora.razonsocial,
        "nitcuenta": req.body.dataDispensadora.nitcuenta,
        "nombrecuenta": req.body.dataDispensadora.nombrecuenta,
        "nombreoperacion": req.body.dataDispensadora.nombreoperacion,
        "idOperacion": req.body.dataDispensadora.idOperacion,
        "locacionNombre": req.body.dataDispensadora.locacionNombre,
        "locacionPiso": req.body.dataDispensadora.locacionPiso,
        "marcaDisp": req.body.dataDispensadora.marcaDisp,
        "modeloDisp": req.body.dataDispensadora.modeloDisp,
        "tipoDisp": req.body.dataDispensadora.tipoDisp,
        "serialDisp": req.body.dataDispensadora.serialDisp,
        "nomDisp": req.body.dataDispensadora.nomDisp
    })
    //console.log(data.data);
    res.json(data.data);
}


dispensadorasControl.putDispenser = async (req, res) => {
    const data = await axios.put('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/moddispensadoras', {
        "req5g": req.body.dataDispensadora.req5g,
        "iddispensadoraup": req.body.dataDispensadora.idDispensadora,
        "nitcuentaup": req.body.dataDispensadora.nitcuenta,
        "nombrecuentaup": req.body.dataDispensadora.nombrecuenta,
        "nombreoperacionup": req.body.dataDispensadora.nombreoperacion,
        "idOperacionup": req.body.dataDispensadora.idOperacion,
        "locacionNombreup": req.body.dataDispensadora.locacionNombre,
        "locacionPisoup": req.body.dataDispensadora.locacionPiso,
        "marcaDispup": req.body.dataDispensadora.marcaDisp,
        "modeloDispup": req.body.dataDispensadora.modeloDisp,
        "tipoDispup": req.body.dataDispensadora.tipoDisp,
        "serialDispup": req.body.dataDispensadora.serialDisp,
        "nomDispup": req.body.dataDispensadora.nomDisp,
        "estadoDisp": req.body.dataDispensadora.activo,
    })
    //console.log(req.body.dataOperacion);
    res.json(data.data);
    
}


dispensadorasControl.getAccounts = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modcuentas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

dispensadorasControl.getoperations = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modoperaciones', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

module.exports = dispensadorasControl;