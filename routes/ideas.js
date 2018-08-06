const express = require('express');
const router = express.Router();
const knex = require('../knex');
const path = require('path');


router.get('/', (req, res, next) =>
	knex('ideas')
	.then(rows => res.json(rows))
);
