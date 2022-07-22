//importer le package HTTP de node.js pour créerserveur
const express = require("express");
const mongoose = require("mongoose");

//importer variable environnement
const dotenv = require("dotenv");
dotenv.config();
//importer les routes
// const sauceRoutes = require('./routes/sauce');
// const userRoutes = require('./routes/user');
// const path = require('path');

//importer HELMET
const helmet = require("helmet");

//utilisation de framework node "express"
const app = express();
app.use(express.json());
//utilisation helmet
app.use(helmet());

//connexion à la base de donnée du serveur
mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_USERNAME}.${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


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

app.use('/api/publication',(req, res, next) => 
{
    const publication =
    [
        {
        _id: 'sfgkgk',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        imageUrl: '',
        date: '',
        userId: 'qlkdozoal',

        }
    ];
res.status(200).json(publication);
});



module.exports = app;