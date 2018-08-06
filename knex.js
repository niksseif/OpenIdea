'use strict';

module.exports = {


const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./OpenIdea/knexfile.js')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
