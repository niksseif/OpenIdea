const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
const service = require('../auth/services.js')



router.get('/', (req, res, next) => {
	res.render('/signup');
});



// REGISTER a user
router.post('/', (req, res, next) => {
	console.log('/signup was hit');
	console.log('req body', req.body);
	res.contentType('application/json');
	if (!req.body.email || !req.body.password || !req.body.name) {
		res.statusCode = 400;
		res.send('{"result": "failed", "message": "email, password, and name are required."}');
		return;
	}
	let email = req.body.email;
	let name = req.body.name;
	let password = req.body.password
	console.log(password,"<<<<");
	let image_url = req.body.image_url
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
			console.log(hashed,'<<<<hashed');
			// create new user record with the email + hashed password
			knex('users')
				.insert({
					name: name,
					email: email,
					image_url: image_url,
					hashed_password: hashed,
				})
				.returning('*')
				.then((result) => {
					const token = service.signToken(user)
					console.log('OK', result);
					console.log('token', token);
					const response = { result: "ok", "token": token }
					res.statusCode = 200;
					res.send(JSON.stringify(response));

				})
				// return res.redirect('/profile')

		})
		.catch((err) => {
			next(err);
			console.log(err, 'error');
		});
});



module.exports = router;
