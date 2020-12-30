const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginControl = {};

loginControl.signin = async (req, res) => {
    const login = await axios.post('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/login', {
        req5g: req.body.req5g,
        correoelec: req.body.correoelec
    })
    //console.log(req.body);
    if (login.data == "") return res.status(401).json({"code": 0, "text": "usuario no existe"});

    const resulPass = bcrypt.compareSync(req.body.pass, login.data[0].contrasena);
    if (resulPass){
        const token = jwt.sign({_id: login.data[0].cliente}, 'secretkey')

        //console.log(login.data);

        const userData = {
            id: login.data[0].cliente,
            nombre: login.data[0].nombrecliente,
            nit: login.data[0].nitcliente,
            token: token
        }
        res.status(200).json(userData);
    }else{
        res.status(401).json({"code": 1, "text": "contraseña incorrecta"});
    }
}

module.exports = loginControl;