const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

router.get('/', (req, res, next) =>
	knex('categories')
	.then(rows => res.json(rows))
);

module.exports = router;
