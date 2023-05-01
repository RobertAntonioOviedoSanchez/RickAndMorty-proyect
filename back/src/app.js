const express = require("express")
const server = express()
const router = require("./routes/index")
const morgan = require("morgan")

server.use(express.json()); //middleware para transformar la info que llega en formato JSON a JAVASCRIPT

server.use(morgan("dev")) //middleware morgan

server.use((req, res, next) => { //middleware que le da permiso al front de preguntar al Back
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/rickandmorty", router); //middleware para rutas



module.exports = server