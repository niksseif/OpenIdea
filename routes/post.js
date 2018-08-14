const express = require('express');
const router = express.Router();
const knex = require('../knex.js');



// /* GET post page. */
router.get('/:userid/ideas',  (req, res, next) => {
  	knex
  	// SELECT users id and idea
  	.select('users.id','users.name','users.image_url as users_image', 'ideas.title','ideas.image_url','ideas.description','ideas.label')
  	// FROM offers
  	.from('ideas')
  	// INNER JOIN ideas and users
  	// ON ideas.users_id=ideas.id
  	.join('users', 'users.id', 'ideas.users_id')
  	// WHERE ideas.users_id=2;
  	.where('ideas.users_id', req.params.userid)
  	.then(data => res.json(data));
  })




module.exports = router;
