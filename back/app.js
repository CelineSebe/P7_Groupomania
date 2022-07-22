//importer le package HTTP de node.js pour créerserveur
const express = require("express");


//importer variable environnement
const dotenv = require("dotenv");
dotenv.config();
//importer les routes


//importer HELMET
const helmet = require("helmet");

//utilisation de framework node "express"
const app = express();
app.use(express.json());
//utilisation helmet
app.use(helmet());


// Configurer CORS: permettre l'utilisation même si un agent utilisateur réalise une requête HTTP multi-origine, 
// cad lorsqu'il demande une ressource provenant d'un domaine, d'un protocole, d'un port différent 
// de celui utilisé sur la page courante

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
    next();
});

//Execution des routes


//Exportation vers les autres fichiers
module.exports = app;