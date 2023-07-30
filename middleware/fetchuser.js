let jwt = require('jsonwebtoken');
const JWT_SECRET = "nitishisagood#boy";

const fetchuser = (req, res, next) => {
    // Here, the next is used to call the function that is after this fectuser function.
    // Get the user from the jwt tpken and add id to req object.

    const token = req.header('token');    // This will fetch the header with name auth-token from the req.
    if(!token)
    {
        res.status(401).send({error: "Please authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);    // This jwt.verify() function takes two argument that is the jwt token and the secret that we have set. And it's function is to convert the aut token into the actual data that has ben sent to tform the token
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
}



module.exports = fetchuser;