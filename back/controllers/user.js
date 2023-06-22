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
                imageUrlUser: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : "/",
                password: hash,
                role: req.body.role || 'utilisateur', // Définir le rôle par défaut si aucun n'est fourni
            });
            user
                .save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({ error }));
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
                            imageUrlUser: user.imageUrlUser,
                            token: jwt.sign
                            (
                                { userId: user._id },
                                `${process.env.APP_SECRET}`,
                                { expiresIn: '24H' }
                            ),
                            role: user.role
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

exports.getUser = (req, res, next) => 
 {
User.find()
        .then((users) =>
        {
            res.status(200).json(users);
        })
        .catch((error) => 
        {
            res.status(400).json
            ({
                error: error
            });
        });
 }

 exports.getOneUser = (req, res, next) => 
 {
    User.findOne
    ({
        _id: req.auth.userId
    })
    .then(
        (user) =>
        {
            res.status(200).json(user);
        })
    .catch(
        (error) => 
        {
            res.status(404).json
            ({
                error: error
            });
        });
 }

 exports.updateImgProfil = (req, res, next) => {

    //  console.log(req.file)
    //  return
     
    const userObject =
    {
        imageUrlUser: `${req.protocol}://${ req.get('host') }/images/${req.file.filename}`
    }
    console.log(userObject)

    // console.log(req.body)

    User.findOne({_id: req.auth.userId})
        .then((user) => {
            User.updateOne( user,userObject)
            .then(() => res.status(200).json( {message: 'User update'}))
            .catch(error => res.status(401).json( {error}))
        })
        .catch((error) => 
            {
                res.status(400).json({ error });
            });
 }


exports.deleteUser = (req, res, next) => {
  const userId = req.params.id; // Identifiant de l'utilisateur à supprimer

  // Vérifier si l'utilisateur connecté a le rôle d'administrateur
//   if (req.user.role !== 'administrateur') {
//     return res.status(403).json({ message: 'Accès refusé. Vous devez être administrateur pour effectuer cette action.' });
//   }

  // Supprimer l'utilisateur de la base de données
  User.findByIdAndRemove(userId)
    .then(() => res.status(200).json({ message: 'Utilisateur supprimé avec succès.' }))
    .catch(error => res.status(500).json({ error }));
};

exports.updateUserRole = (req, res, next) => {
    const userId = req.params.id;
    const newRole = req.body.role;
  
    User.findByIdAndUpdate(userId, { role: newRole }, { new: true })
      .then(updatedUser => {
        if (!updatedUser) {
          return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }
        res.status(200).json({ message: 'Rôle de l\'utilisateur mis à jour avec succès.', user: updatedUser });
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.updateUser = (req, res, next) => {
    const userId = req.params.id;
    const newPseudo = req.body.pseudo;
    
    console.log("newpseudo",newPseudo)
    
    User.findByIdAndUpdate(userId, { pseudo: newPseudo }, { new: true })
      .then(updatedUser => {
        if (!updatedUser) {
          return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }
        res.status(200).json({ message: 'Pseudo de l\'utilisateur mis à jour avec succès.', user: updatedUser });
      })
      .catch(error => res.status(500).json({ error }));
  };
  
