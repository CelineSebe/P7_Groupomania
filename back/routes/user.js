const express = require('express');
const router = express.Router();

const auth = require ('../middleware/auth');
const userCtrl = require('../controllers/user');
// const { checkUser } = require("../middleware/auth")

const multer = require('../middleware/multer-config');


//auth

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

router.get('/logout', userCtrl.logout); 

// user
router.get('/oneuser', auth, userCtrl.getOneUser);
router.get('/user', auth, userCtrl.getUser);
router.post("/upload", auth, multer, userCtrl.updateImgProfil);

// Ajouter la route pour supprimer un utilisateur
router.delete('/user/:id', auth, userCtrl.deleteUser);
router.put('/user/:id/role', auth, userCtrl.updateUserRole);

module.exports = router;