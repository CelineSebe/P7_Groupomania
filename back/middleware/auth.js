const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, `${process.env.APP_SECRET}`);
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        // console.log(req.headers.authorization)
        next();
    } catch(error){
        res.status(401).json({ error });
    }
};
