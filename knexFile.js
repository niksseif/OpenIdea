'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/openidea_dv'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/openidea_dv'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
