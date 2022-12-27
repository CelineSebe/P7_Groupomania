//Importation du multer
const multer = require('multer');

//Créer un dictionnaire de mime-types
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
}

//Créer un objet de config pour multer et enregistrer un fichier sur un disque
const storagePost = multer.diskStorage({
    //Configurer la destination des images
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const nameWithoutExt = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        if (extension !== 'png' && extension !== 'jpg' && extension !== 'jpeg') {
            return callback(new Error('Only png, jpg and jpeg images are allowed'));
        }
        callback(null, nameWithoutExt + Date.now() + '.' + extension);
    }
});

const storageProfil = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        callback(null, Date.now() + '.' + extension);
    }
 })

module.exports = multer({storage: storagePost}).single('imageUrl');

module.exports = multer({storage:storageProfil}).single('imageUrl');