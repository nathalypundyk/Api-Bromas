const Bromas = require('./../modelos/modeloBromas')

module.exports.todasLasBromas = (req, res) => {
    Bromas.find()
        .then((listaBromas) => {
            return res.status(200).json(listaBromas);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.bromaRandom = (req, res) => {
    Bromas.find()
        .then((listaBromas) => {
            if (listaBromas.length === 0) {
                return res.status(404).json({ mensaje: 'No hay bromas disponibles' });
            }
            const randomIndex = Math.floor(Math.random() * listaBromas.length);
            return res.status(200).json(listaBromas[randomIndex]);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.obtenerPorId = (req, res) => {
    Bromas.findOne({_id: req.params.id})
        .then((bromaEncontrada) => {
            if (! bromaEncontrada){
                res.statusMessage = 'Broma no encontrada';
                return res.status(404).json({mensaje: 'Broma no encontrada.'});
            }
            return res.status(200).json(bromaEncontrada);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.agregarBroma = (req, res) => {
    const {setup, punchline} = req.body;

    if(!setup || !punchline){
        res.statusMessage = 'Por favor proporcionar todos los campos';
        return res.status(406).json({mensaje: 'Por favor proporcionar todos los campos'});
    }

    Bromas.create(req.body)
        .then((nuevaBroma) => {
            return res.status(201).json(nuevaBroma);
        })
        .catch((error) => {
            return res.status(400).json(error);
        })

};

module.exports.actualizarBroma = (req, res) => {
    const camposParaActualizar = {};
    const {setup, punchline} = req.body;
    if (setup){
        camposParaActualizar.setup = setup;
    }
    if (punchline){
        camposParaActualizar.punchline = punchline;
    }

    Bromas.findOneAndUpdate({_id: req.params.id}, camposParaActualizar, {new: true})
        .then((bromaActualizada) => {
            return res.status(200).json(bromaActualizada);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.removerBroma = (req, res) => {
    Bromas.deleteOne({_id: req.params.id})
        .then(() => {
            return res.status(204).end();
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
}