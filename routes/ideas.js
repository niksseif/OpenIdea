const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

router.get('/', (req, res, next) =>
	knex('ideas')
	.then(rows => res.json(rows))
);
//editing the idea
// router.post('/', (req, res, next) => {
//
// 	if (!req.body.user_id ) {
// 		res.statusCode = 400;
// 		res.send('{"result": "failed", "message": "email, password, and name are required."}');
// 		return;
// 	}
//
// 	let title = req.body.title;
// 	let description = req.body.description;
// 	let image_url = req.body.image_url
//
// 	knex('ideas')
// 		.where('email', req.body.email)
// 		.first()
// 		.then((idea) => {
// 			if(user_id !== user_id) {
// 				res.statusCode = 409;
// 				res.send('{"result": "failed", "message": "Oops that email is already used"}');
// 				return;
// 			}
// 			// create new user record with the email + hashed password
// 			knex('ideas')
// 				.insert({
// 					title: title,
// 					description: description,
// 					image_url: image_url,
// 				})
// 				.returning('*')
// 				.then((result) => {
// 					console.log('OK', result);
// 					res.statusCode = 200;
// 					res.send(`{"result": "ok", "user": ${JSON.stringify(result)}}`);
// 					// res.redirect('/signup1');
// 				});
// 		})
// 		.catch((err) => {
// 			next(err);
// 			console.log(err, 'error');
// 		});
// });
//


module.exports = router;
