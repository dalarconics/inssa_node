const axios = require('axios');
const jwt = require('jsonwebtoken');

const loginControl = {};

loginControl.signin = async (req, res) => {
    const data = await axios.post('https://ulygokit7b.execute-api.us-east-1.amazonaws.com/dev/dashboard', {
      email: req.body.email,
      pass: eq.body.pass
    })
    if (!data) return res.status(401).json({"code": 0, "text": "usuario no existe"});
    if (data.pass !== req.body.pass) return res.status(401).json({"code": 1, "text": "contraseña incorrecta"});


    //console.log(data.data);
    const userData = {
        email: req.body.email,
        pass: req.body.pass,
        token: ''
    }

    //buscar en la base de datos el usuario
    console.log(req.body);
    const token = jwt.sign({_id: userData.pass}, 'secretkey')
    userData.token = token;
    res.status(200).json({userData});
}

module.exports = loginControl;