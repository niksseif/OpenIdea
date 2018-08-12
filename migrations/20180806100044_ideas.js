exports.up = function(knex, Promise) {
  return knex.schema.createTable('ideas', (table) => {
    table.increments();
    table.integer('users_id').notNullable().references('users.id');
    table.string('title');
    table.string('description');
    table.text('image_url');
    table.string('label');
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ideas')
}
