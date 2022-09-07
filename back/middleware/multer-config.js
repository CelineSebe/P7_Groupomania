const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        // const nameWithoutExt = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        // if (extension !== 'png' && extension !== 'jpg' && extension !== 'jpeg') {
        //     return callback(new Error('Only png, jpg and jpeg images are allowed'));
        // }
        callback(null,Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('imageUrl');