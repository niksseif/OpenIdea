
exports.up = function(knex, Promise) {
  return knex.schema.createTable('labels', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.integer('ideas_id').references('ideas.id');
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('labels')
}
