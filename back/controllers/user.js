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
                // imageUrlUser: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : "/",
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
                            pseudo: user.pseudo,
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
    // next()
 };

 exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
});
    res.status(200).send('user is logged out');
};

// exports.getUser = async (req, res) => {
//     const id = req.auth.id;
//     const user = await Users.findOne({ where: { id: id }, attributes: ['pseudo', 'email', 'password', 'userImageUrl' ]});
//     res.status(200).json(user);
// };


