
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, title: 'sketching',users_id:1, ideas_id: 1},
        {id: 2, title: 'photography',users_id:2, ideas_id: 2},
        {id: 3, title: 'writting',users_id:3, ideas_id: 3}
      ]);
    });
};
