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
    imageUrl: `${req.protocol}://${req.get('host')}/imageUrl/${req.file.filename}` 
}
  

    const publi = new Publi(dataPubli)

    publi.save()
    .then(() => { res.status(201).json({message: 'Votre publication est en ligne!'})})
    .catch(error => { res.status(400).json( { error })})
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
    const publiObject = {...req.body};
        let like = req.body.like;
        let userId = req.body.userId;
        let publiId = req.params.id;
        Publi.findOne({ _id: publiId })
            .then((publi) => 
            {
                const countUsers =
                    {
                        usersLiked: publi.usersLiked,
                        usersDisliked: publi.usersDisliked,
                        likes: 0,
                        dislikes:0,
                    };
                    if (like == 1)
                        {
                            if(!publi.usersLiked.includes(userId) && !publi.usersDisliked.includes(userId))
                            {
                                countUsers.usersLiked.push(userId);
                            }
                        }else if (like == -1)
                        {
                            if (!publi.userLiked.includes(userId) && !publi.usersDisliked.includes(userId))
                            {
                                countUsers.usersDisliked.push(userId);
                            }
                        } else
                        {
                            if (publi.usersLiked.includes(userId))
                            {
                                const index = countUsers.usersLiked.indexOf(userId);
                                countUsers.usersLiked.splice(index, 1);
                            }
                            else if (publi.usersDisliked.includes(userId))
                            {
                                const index = countUsers.usersDisliked.indexOf(userId);
                                countUsers.usersDisliked.splice(index, 1);
                            }
                        }
                        countUsers.likes = countUsers.usersLiked.length;
                        countUsers.dislikes = countUsers.usersDisliked.length;

                        Publi.updateOne({ _id: publiId }, countUsers)
                            .then(() => res.status(201)
                                .json({ message:" Action sur le like ou dislike pris en compte!"}))
                            .catch(error => res.status(400)
                                .json({ error }))
                })
                .catch((error) => res.status(500).json({ error }));
            }