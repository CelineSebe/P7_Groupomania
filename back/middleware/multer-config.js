const multer = require('multer');

const MIME_TYPES = {
    'images/jpg': 'jpg',
    'images/jpeg': 'jpg',
    'images/png': 'png',
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const nameWithoutExt = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        // if (extension !== 'png' && extension !== 'jpg' && extension !== 'jpeg') {
        //     return callback(new Error('Only png, jpg and jpeg images are allowed'));
        // }
        callback(null, nameWithoutExt + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('imageUrl');