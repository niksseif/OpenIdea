exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.integer('users_id').notNullable().references('users.id');
    table.integer('ideas_id').notNullable().references('ideas.id');
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
}
