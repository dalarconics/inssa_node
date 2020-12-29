const express = require('express');
const path = require('path');
const cors = require('cors');

//inicializacion
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);


//Middlewares
//app.use(cors({origin: "http://localhost:4200"}));
app.use(cors());
app.use(express.urlencoded({extended: false}));

//variables globales


app.use(express.json());

//rutas
app.use(require('./routes/login'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/informes'));
app.use(require('./routes/inventarios'));

//archivos estaticos

//servidor escuchando
app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
})