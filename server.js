const express = require('express');
const app = express();
const RouterBromas = require('./rutas/routerBromas');

require('./configuracion/baseDeDatos');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', RouterBromas);

app.listen(8080, () => {
    console.log("El servidor ya esta encendido en el puerto 8080");
});
