const db = require("../config/db").getDB();
const fs = require("fs");

const pipeline = promisify(require("stream").pipeline);
//Importation model de la base de données
const User = require('../models/User');

//Importation de bcrypt pour hasher le mot de passe
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = (req, res, next) => 
{
    bcrypt.hash(req.body.password, 10)
        .then(hash => 
        {
            const user = new User({
                pseudo: req.body.pseudo,
                email : req.body.email,
                password: hash
            });
            user
                .save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé'}))
                .catch(error => res.status(400).json({error}));
        })
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => 
        {
            if (user === null) 
            {
                res.status(401).json({ message: 'user = null'});
            }else 
            {
                bcrypt.compare(req.body.password, user.password)
                .then(valid => 
                {
                    if (!valid) 
                    {
                        res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }else
                    {
                        res.status(200).json
                        ({
                            userId: user._id,
                            token: jwt.sign
                            (
                                { userId: user._id },
                                `${process.env.APP_SECRET}`,
                                { expiresIn: '24H' }
                            )
                        });
                    }
                })
                .catch(error => 
                {
                    res.status(500).json( { error } );
                })
            }
        })
        .catch(error => 
        {
            res.status(500).json({ error })
        });
 };

 exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
});
    res.status(200).send('user is logged out');
};

// update img
module.exports.updateImgProfil = async (req, res) => {
	try {
		if (req.file.detectedMimeType != "image/jpg" && req.file.detectedMimeType != "image/png" && req.file.detectedMimeType != "image/jpeg") throw Error("invalid file");
		if (req.file.size > 500000) throw Error("max size");
	} catch (err) {
		res.status(201).json({ err });
	}

	const fileName = req.body.name + req.body.userId + ".jpg";
	const path = `${__dirname}/../../client/public/uploads/profil/${fileName}`;
	const clientPath = `./uploads/profil/${fileName}`;

	await pipeline(req.file.stream, fs.createWriteStream(path));

	try {
		const sqlRequest = `UPDATE user SET user_picture = "${clientPath}" WHERE user_id = ${req.body.userId}`;
		db.query(sqlRequest, (err, result) => {
			if (err) {
				res.status(500).json({ err });
			}
			res.status(200).json(clientPath);
		});
	} catch (err) {
		return res.status(500).send({ message: err });
	}
};

