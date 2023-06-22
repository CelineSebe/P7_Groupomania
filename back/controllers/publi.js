const Publi = require('../models/Publi');

const fs = require('fs');


//Controller POST pour créer une publication
// exports.createPubli = (req, res, next) =>
// {
//     const publiObject = req.body.publi;
//     // delete publiObject._id;
//     const publi = new Publi
//     ({ 
//         ...publiObject,
//         userId: req.body.userId,
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        
//     });
//     publi.save()
//     .then(() => { res.status(201).json({message: 'Votre publication est en ligne!'})})
//     .catch(error => { res.status(400).json( { error })})
// };

exports.createPubli = (req, res, next) =>
{
    console.log(req.body);

const dataPubli = {
    description: req.body.description,
    userId: req.auth.userId,
    imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : "/"
}
    const publi = new Publi(dataPubli)

    publi.save()
    .then(() => { res.status(201).json({message: 'Votre publication est en ligne!'})})
    .catch(error => { res.status(400).json( "La création de la publication a échoué")})
};

//Controller GET renvoie une publication selon l'_id
exports.findOne = (req, res, next) =>
{
    Publi.findOne
    ({
        _id: req.params.id
    })
    .then(
        (publi) =>
        {
            res.status(200).json(publi);
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

//Controller PUT modifie la publication selon l'_id
// Une image peut être chargée selon la chaîne de caractères (req.body.publi),
//sinon vers req.param.id

exports.modifyPubli = (req, res, next) =>
{
    const publiObject = req.file?
    {
        ...JSON.parse(req.body.publi),
        imageURL: `${req.protocol}://${ req.get('host') }/images/${req.file.filename}`
    } : { ...req.body };

    Publi.findOne({_id: req.params.id})
        .then((publi) => 
            {
            Publi.updateOne( { _id: req.params.id}, {...publiObject, _id: req.params.id})
                .then(() => res.status(200).json( {message: 'Post update'}))
                .catch(error => res.status(401).json( {error}))
            }
        )
        .catch((error) => 
            {
                res.status(400).json({ error });
            });
};

//Controller DELETE supprime la publi selon l'_id
exports.deletePubli = (req, res, next) =>
{
    Publi.findOne({_id: req.params.id})
        .then((publi) =>
            {
                const filename = publi.imageUrl.split('/images/')[1];
                fs.unlink(`/images/${filename}`, () => 
                {
                    Publi.deleteOne({_id: req.params.id})
                        .then(() => res.status(200).json({message: 'Publication supprimée'}))
                        .catch(() => res.status(401).json( {error} ));
                })
            }
        )
        .catch( error =>
            {
                res.status(500).json({ error });
            });
};

//Controller GET renvoie toutes les publications
exports.getAllPublis = (req, res, next) =>
{
    Publi.find()
        .then((publis) =>
        {
            res.status(200).json(publis);
        })
        .catch((error) => 
        {
            res.status(400).json
            ({
                error: error
            });
        });
};

//Controller POST définit le status like, propre à chaque userID.
//Like = 0 par défaut et quand l'userId annule son like/dislike.
//Le compteur de like/dislikes total est mis à jour

exports.likeDislike = (req, res, next) =>
{
    
    const publiObject = { ...req.body};
    let likes = publiObject.likes;
    let userId = req.auth.userId;
    let publiId = req.params.id;
    
    console.log('body', req.body)
    
    Publi.findOne({ _id: publiId })
    .then((publi) => 
    {
        const countUsers =
        {
            usersLikes: publi.usersLikes,
            usersDislikes: publi.usersDislikes,
            likes: 0,
            dislikes:0,
        };
        console.log('userId', req.auth.userId)
        console.log('likes', likes)
        
        if (typeof userId !== 'undefined') {
            if (publiObject.likes === 1) {
              if (!publi.usersLikes.includes(userId)) {
                countUsers.usersLikes.push(userId);
              }
      
              if (publi.usersDislikes.includes(userId)) {
                const index = countUsers.usersDislikes.indexOf(userId);
                countUsers.usersDislikes.splice(index, 1);
              }
            } else if (publiObject.likes === -1) {
              if (!publi.usersDislikes.includes(userId)) {
                countUsers.usersDislikes.push(userId);
              }
      
              if (publi.usersLikes.includes(userId)) {
                const index = countUsers.usersLikes.indexOf(userId);
                countUsers.usersLikes.splice(index, 1);
              }
            }
          }
       
                countUsers.likes = countUsers.usersLikes.length;
                countUsers.dislikes = countUsers.usersDislikes.length;

                console.log("countUsers", countUsers.likes)
                console.log("countUsers", countUsers.dislikes)
                Publi.updateOne({ _id: publiId }, {$set: countUsers})
                    .then(() => res.status(201)
                    .json({ message:" Action sur le like ou dislike pris en compte!"}))
                    .catch(error => res.status(400)
                    .json({ error }))
                })
            .catch((error) => res.status(500).json({ error }));
}

// Contrôleur POST pour créer un commentaire
exports.createComment = async (req, res) => {
  try {
    const { postId, userId, content, pseudo, imageUrlUser } = req.body;

    const publi = await Publi.findOne({ _id: postId });

    if (!publi) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    console.log("comment", content)

     // Créez un nouvel objet commentaire avec les informations de l'utilisateur
     const newComment = {
        userId: userId,
        content: content,
        pseudo: pseudo,
        imageUrlUser: imageUrlUser
      };
    publi.comments.push(newComment);

    await publi.save();

    res.status(201).json({ message: 'Comment created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Contrôleur pour récupérer tous les commentaires d'une publication
exports.getCommentsByPostId = async (req, res) => {
    try {
      const postId = req.params.id;
      const publi = await Publi.findOne({ _id: postId });
  
      if (!publi || publi.comments.length === 0) {
        return res.status(404).json({ message: 'Aucun commentaire trouvé' });
      }
  
      const comments = publi.comments;
      console.log('comments', comments)
      res.status(200).json({ comments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  };
