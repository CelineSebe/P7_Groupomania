const express = require('express');
const router = express.Router();

// const auth = require ('../middleware/auth');
const userCtrl = require('../controllers/user');
// const { checkUser } = require("../middleware/auth")

// const multer = require("multer");
// const upload = multer();

//auth
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/logout', userCtrl.logout); 
// user
// router.post("/upload", checkUser, upload.single("file"), userCtrl.updateImgProfil);
// router.get("/:id", checkUser, userController.userInfo);


module.exports = router;