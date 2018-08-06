
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ideas').del()
    .then(function () {
      // Inserts seed entries
      return knex('ideas').insert([
        {id: 1, users_id: 1,title:'Robot1', description:'I have decided to write code for my new robot to connect it to my Alexa',image_url:'https://i.pinimg.com/564x/8c/f0/60/8cf06020e82ca94ddd8f65b990e84621.jpg'},
        {id: 2, users_id: 2,title:'My next house', description:'this is the plan for the next house i am going to build',image_url:'https://i.pinimg.com/564x/d2/f6/06/d2f606c5bd27ef8ee95c1252da7cd6f4.jpg'},
        {id: 3, users_id: 3,title:'My new project', description:'I want to write a book',image_url:'https://i.pinimg.com/564x/41/c8/d7/41c8d7be885cd2821a0c43a2dfe07fa4.jpg'},
        {id: 4, users_id: 1,title:'My new project', description:'I want to write a book',image_url:'https://i.pinimg.com/564x/41/c8/d7/41c8d7be885cd2821a0c43a2dfe07fa4.jpg'}
      ]);
    });
};
