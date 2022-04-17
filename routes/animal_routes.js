const express = require('express');

const animal_routes = express.Router();

const animais = [];

animal_routes.get('/', (req, res) => res.status(200).send({
    "message": "Listing animals",
    "Zoo": animais
}))

animal_routes.post('/', (req, res) => {

        const animal  = req.body;

        animais.push(animal);

        return res.status(200).send({
            "message": `O animal ${animal.name} foi cadastrado!`

        });
    
    }
);

animal_routes.delete('/delete', (req, res) => {

    const { name } = req.body;

    for(var i = 0; i < animais.length; i++){
        if (name === animais[i].name) {
            animais.splice(i,1);    
        }
    }

    return res.status(200).send({
        "message": `${name} foi deletado!`
    });

}
);

animal_routes.put('/put', (req, res) => {

    const animal  = req.body;

    for(var i = 0; i < animais.length; i++){
        if (animal.name === animais[i].name) {
            animais[i] = animal;   
        }
    }

    return res.status(200).send({
        "message": `O animal ${animal.name} foi atualizado!`
    });
}
);

module.exports = animal_routes;