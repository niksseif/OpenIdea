
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        {id: 1, users_id: 1,title:'Robot1', description:'I have decided to write code for my new robot to connect it to my Alexa'},
        {id: 2, users_id: 2,title:'My next house', description:'this is the plan for the next house i am going to build'},
        {id: 3, users_id: 3,title:'My new project', description:'I want to write a book'}
      ]);
    });
};
