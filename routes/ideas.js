const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

router.get('/', (req, res, next) =>
	knex('ideas')
	.then(rows => res.json(rows))
);
//get one idea
// router.get('/:id', (req, res, next) => {
//   knex('ideas')
//   .where('id', req.params.id)
//   .then((data) => {
//     console.log('the specific idea', data)
//     res.json(data)
//   })
// })

// /* GET ideas of one user */
router.get('/:userid',  (req, res, next) => {
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
// editing the idea
// UPDATE one idea, whom already exists in DB based on user id
router.put('/:user_id', (req, res, next) => {
  console.log('THE PUT ROUTE OHHHHH<<<<');

	console.log(JSON.stringify(req.body),"<<<<<req.body");
	console.log(req.params.id,"<<<<<req.params.id");
  // look up a specific user in the database
  knex('ideas')
  .where('ideas.id', req.params.id)
  .then((data) => {
    console.log('the specific idea', data)

    // once found, if found, update that user record's data
    if(data.length) {
      // user was found, go ahead and update
      knex('ideas')
      .update({
        title: req.body.title || null,
				description:req.body.description || null,
				image_url:req.body.image_url || null
      })
      .where('id', req.params.id)
      .returning('*')
      .then((updateResult) => {
      console.log('updateResult', updateResult)
        // respond with the user object, represents a record from the user table
        // conclude the route
        res.send(updateResult[0])
      })
    }
  })
})


module.exports = router;
