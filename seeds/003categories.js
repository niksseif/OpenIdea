
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { title: 'sketching',users_id:1, ideas_id: 1},
        { title: 'photography',users_id:2, ideas_id: 2},
        { title: 'writting',users_id:3, ideas_id: 3}
      ]);
    });
};
