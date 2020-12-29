const axios = require('axios');

const dashboardControl = {};

dashboardControl.customerSalesSummary = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

dashboardControl.accountSalesSummary = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

dashboardControl.operationSalesSummary = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

dashboardControl.betterAccount = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

dashboardControl.betterOperation = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


dashboardControl.betterDispenser = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            fechainicial: req.query.fechainicial,
            fechafinal: req.query.fechafinal
        }
    })
    //console.log(data.data);
    res.json(data.data);
}

module.exports = dashboardControl;