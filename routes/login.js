require('dotenv').config()
const express = require('express');
const router = express.Router();
const knex = require('../knex.js');
const bcrypt = require('bcrypt')
const service = require('../auth/services.js')


router.post('/', (req, res, next) => {
  console.log("we hit the login route!, params are:", req.body.email, req.body.password)
  let email = req.body.email
  let password = req.body.password
  // see if the user exists

  knex('users')
  .where('email', email)
  .first()
  .then(user => {
        console.log(user)
        if (user) {
          console.log(user,"<<<user");
        // user bcrypt.compare to input to hashed password in DB
          let passwordGood = bcrypt.compareSync(password, user.password)
          console.log('password is good',passwordGood);

          // if all good, create token, and attach it as a cookie attached to the response
          if (passwordGood) {
          // create token for the user
            let token = service.signToken(user.id, user.email)
            console.log('token >>>', token)
            res.status(200).send({token, data:user})
          } else {
          // throw new Error('Wrong password');
            res.status(404).send({error: {message: 'Wrong password'}})
          }
        } else {
        // throw new Error('User not found')
          res.status(404).send({error: {message: 'User not found'}})
        }
      })
    .catch((error) => {
      res.status(403).send("Not Allowed, suckas")
  })
})

module.exports = router


// // login USER
// router.post('/', (req, res, next) => {
//   let email = req.body.email
//   let password = req.body.password
//   knex('users')
//     .where('email', email)
//     .first()
//     .then(user => {
//       console.log(user)
//       if (user) {
//       // user bcrypt.compare to input to hashed password in DB
//         let passwordGood = bcrypt.compareSync(password, user.password)
//
//         // if all good, create token, and attach it as a cookie attached to the response
//         if (passwordGood) {
//         // create token
//           let token = service.signToken(user.id, user.email)
//           console.log('token', token)
//           res.status(200).send({token, data:user})
//         } else {
//         // throw new Error('Wrong password');
//           res.status(404).send({error: {message: 'Wrong password'}})
//         }
//       } else {
//       // throw new Error('User not found')
//         res.status(404).send({error: {message: 'User not found'}})
//       }
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(404).send({error: {message: err.message}})
//     })
// })
