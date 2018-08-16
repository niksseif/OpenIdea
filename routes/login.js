const express = require('express');
const router = express.Router();
const knex = require('../knex.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/', (req, res, next) => {
  console.log("we hit the login route!, params are:", req.body.email, req.body.password)

  // see if the user exists

  knex('users')
  .where('email', req.body.email)
  .then((data) => {
    console.log("Got some data:", data)

    if (data.length === 0) {
      res.status(403).send("Not Allowed, suckas")
    } else {
      let hashedPassword = data[0].hashed_password
      let authenticated = bcrypt.compareSync(req.body.password, hashedPassword);
      req.body.password = ""

      if (authenticated) {
        let token = jwt.sign({ user_id: data[0].id }, 'meow');

        res.status(200).json({"token": token})

      } else {
        res.status(403).send("Not Allowed, suckas")
      }
    }

  }).catch((error) => {
    res.status(403).send("Not Allowed, suckas")
  })
})

module.exports = router
