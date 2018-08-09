const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');
const path = require('path');
const md5 = require('md5');

const signupHTML = path.join(__dirname, '..', 'public/signupform.html');

router.get('/', (req, res, next) => {
	res.render('/signup');
});
//
  // if (!email || !email.trim()) {
  //   return next(boom.create(400, 'Email must not be blank'));
  // }
  //
  // if (!password || password.length < 8) {
  //   return next(boom.create(
  //     400,
  //     'Password must be at least 8 characters long'
  //   ));
  // }

// REGISTER a user
router.post('/', (req, res, next) => {
	console.log('/signup was hit');
	console.log('req body', req.body);
  let name = req.body.name;
  let email = req.body.email;
  let image_url = req.body.image_url;
  let password = req.body.password;
	res.contentType('application/json');
	if (!email || !!email.trim()) {
		res.statusCode = 400;
		return ( 'Email must not be blank')
	}
  if (!password || password.length < 8) {
    return ( 'Password must be at least 8 characters long')
  }


	//check the email doesn't already exist in users table
	knex('users')
		.where('email', req.body.email)
		.first()
		.then((user) => {
			if(user) {
				res.statusCode = 409;
				res.send('{"result": "failed", "message": "Oops that email is already used"}');
				return;
			}

			// hash the password
			var hashed = bcrypt.hashSync(req.body.password, 8);

			// create new user record with the email + hashed password
			knex('users')
				.insert({
					name: req.body.name,
					email: req.body.email,
          image_url: req.body.image,
					hashed_password: hashed,
				})
				.returning('*')
				.then((result) => {
					console.log('OK', result);
					res.statusCode = 200;
					res.send(`{"result": "ok", "user": ${JSON.stringify(result)}}`);
					// res.redirect('/signup1');
				});
		})
		.catch((err) => {
			next(err);
			console.log(err, 'error');
		});
});



module.exports = router;
