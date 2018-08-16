const jwt = require('jsonwebtoken')
require('dotenv').config()
let secret = process.env.SECRET

const signToken = (id, email) => {
  return jwt.sign({ _id: id, email }, secrete, { expiresIn: 60 * 60 * 5 })
}

//this is for verifying the token if it is athorized or not
function verifyToken(req, res, next){
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    console.log('token', token);
    try {
      jwt.verify(token, secrete, (err, data) => {
        if (err) {
          res.status(403).send({ error: {message: 'invalid token' }});
        } else {
          return next()
        }
      })
    } catch(err) {
      console.log('jwt error:', err);
    }
  } else {
    res.status(403).send({  error: {message: 'authorization header missing'} })
  }
}


module.exports = {
  signToken: signToken, secrete: secrete,
  verifyToken: verifyToken
}
