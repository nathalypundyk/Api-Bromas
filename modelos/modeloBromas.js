const mongoose = require('mongoose');

const ColleccionBromas = mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});

const Bromas = mongoose.model('bromas', ColleccionBromas); //CREA LA COLECCION O SI YA EXISTE LA CONECTA CON EL OBJETO

module.exports = Bromas; 