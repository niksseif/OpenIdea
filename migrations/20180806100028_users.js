
//name,email, password,
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.text('img_url');
    table.specificType('hashed_password', 'char(60)');
    table.timestamps(true, true);
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
