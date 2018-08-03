development: {
  client: 'pg',
  connection: 'postgres://localhost/openidea_dv'
},

test: {
  client: 'pg',
  connection: 'postgres://localhost/openidea_test'
},

production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
};
