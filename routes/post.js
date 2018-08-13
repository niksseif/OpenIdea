const express = require('express');
const router = express.Router();
const knex = require('../knex.js');



// /* GET post page. */
router.get('/:userid/ideas',  (req, res, next) => {
  	knex
  	// SELECT users id and users name 
  	.select('users.id','users.name','users.image_url as user_image', 'ideas.title','ideas.image_url','ideas.description')
  	// FROM offers
  	.from('ideas')
  	// INNER JOIN categories
  	// ON ideas.users_id=ideas.id
  	.join('users', 'users.id', 'ideas.users_id',  )
  	// WHERE ideas.users_id=2;
  	.where('ideas.users_id', req.params.userid)
  	.then(data => res.json(data));
  })




module.exports = router;
