const express = require('express');
const ControladorBromas = require('./../controladores/controladorBromas')
const routerBromas = express.Router();

routerBromas.get('/bromas', ControladorBromas.todasLasBromas);
routerBromas.get('/bromas/:id', ControladorBromas.obtenerPorId);
routerBromas.get('/bromas/random', ControladorBromas.bromaRandom);
routerBromas.post('/bromas/nuevo', ControladorBromas.agregarBroma);
routerBromas.put('/bromas/actualizar/:id', ControladorBromas.actualizarBroma);
routerBromas.delete('/bromas/eliminar/:id', ControladorBromas.removerBroma);

module.exports = routerBromas;