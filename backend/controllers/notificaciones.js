const axios = require('axios');

const notificcionesControl = {};

notificcionesControl.allNotificationsActives = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modalertas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


notificcionesControl.getDispenser = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modinventarios', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


notificcionesControl.getNotifications = async (req, res) => {
    const data = await axios.get('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modalertas', {
        params: {
            req5g: req.query.req5g,
            idcliente: req.query.idcliente,
            serialMaq: req.query.serialMaq
        }
    })
    //console.log(data.data);
    res.json(data.data);
}


notificcionesControl.putNotification = async (req, res) => {
    const data = await axios.put('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/modalertas', {
        "req5g": req.body.Params.req5g,
        "idAlerta": req.body.Params.idAlerta
    })
    //console.log(req.body.Params);
    res.json(data.data);
}

module.exports = notificcionesControl;