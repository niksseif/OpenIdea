exports.up = function(knex, Promise) {
  return knex.schema.createTable('ideas', (table) => {
    table.increments();
    table.integer('users_id').notNullable().references('users.id');
    table.string('title').notNullable();
    table.string('description');
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ideas')
}
