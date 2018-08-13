const express = require('express');
const router = express.Router();
const knex = require('../knex.js');



// /* GET post page. */
router.get('/:userid/ideas',  (req, res, next) => {
  	knex
  	// SELECT offers.id, categories.title
  	.select('users.id', 'users.name', 'users.image_url','ideas.title','ideas.label', 'ideas.image_url','ideas.description')
  	// FROM offers
  	.from('users','ideas')
  	// INNER JOIN categories
  	// ON ideas.users_id=ideas.id
  	.innerJoin('ideas', 'ideas.users_id', 'ideas.id',  )
  	// WHERE offers.users_id=2;
  	.where('ideas.users_id', req.params.userid)
  	.then(data => res.json(data));
  })




module.exports = router;
