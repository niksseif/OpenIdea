var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) =>
	knex('users')
	.then(rows => res.json(rows))
);

// GET Specific User
router.get('/:userid', (req, res, next) => {
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.json(data)
  })
})
module.exports = router;
