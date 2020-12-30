const axios = require('axios');

const informesControl = {};


informesControl.detailSalesByAccount = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/rptcuentas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
            nitcuenta: req.query.nitcuenta
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.detailCashSalesByAccount = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/rptcuentas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
            nitcuenta: req.query.nitcuenta
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.detailCashSalesByOperation = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/reportes', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            idoperacion: req.query.idoperacion,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.detailCashlessSalesByAccount = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/rptcuentas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
            nitcuenta: req.query.nitcuenta
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.detailCashlessSalesByOperations = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/reportes', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            idoperacion: req.query.idoperacion,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
        }
    })
    //console.log(req.query);
    res.json(data.data);
}


informesControl.consolidatedTotalSales = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.consolidatedAccountSales = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.consolidatedOperationsSales = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.consolidatedDispensersSales = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.consolidatedProductsSales = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.cashlessRefills = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/rptconsultas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            idoperacion: req.query.idoperacion,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal,
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.listAccounts = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/reportes', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


informesControl.listOperations = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/reportes', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

module.exports = informesControl;