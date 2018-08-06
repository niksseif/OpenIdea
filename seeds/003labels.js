
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('labels').del()
    .then(function () {
      // Inserts seed entries
      return knex('labels').insert([
        {id: 1, title: 'private',ideas_id:2},
        {id: 2, title: 'public', ideas_id:1},
      ]);
    });
};
//titel ideas-id
