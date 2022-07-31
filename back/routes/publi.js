//importation d'express
const express = require ('express');
const router = express.Router();

//importer middleware
const auth = require('../middleware/auth');

//importer controller
 const publiCtrl = require('../controllers/publi');

 router.get('/', auth, publiCtrl.getAllPublis);
 router.post('/', auth, publiCtrl.createPubli);
 router.get('/:id', auth, publiCtrl.findOnePubli);
 router.put('/:id', auth, publiCtrl.modifyPubli);
 router.delete('/:id', auth, publiCtrl.deletePubli);
 router.post('/:id', auth, publiCtrl.likeDislike);