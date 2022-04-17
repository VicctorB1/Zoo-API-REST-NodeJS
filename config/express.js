const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const animal_routes = require('../routes/animal_routes')

module.exports = () =>{
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));

    app.use(bodyParser.json());
    
    app.use('/animal', animal_routes);

  return app;
};

