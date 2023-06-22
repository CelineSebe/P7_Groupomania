//importation d'express
const express = require ('express');
const router = express.Router();

//importer middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//importer controller
 const publiCtrl = require('../controllers/publi');

 router.get('/', auth, publiCtrl.getAllPublis);
 router.post('/', auth, multer, publiCtrl.createPubli);
 router.get('/:id', auth, publiCtrl.findOne);
 router.put('/:id', auth, multer, publiCtrl.modifyPubli);
 router.delete('/:id', auth, publiCtrl.deletePubli);
 router.put('/:id/like', auth, publiCtrl.likeDislike);
 router.post('/comments', auth, publiCtrl.createComment);
 router.get('/comments/:id', auth, publiCtrl.getCommentsByPostId);
 router.delete('/comments/:commentId', auth, publiCtrl.deleteComment);
 module.exports = router;