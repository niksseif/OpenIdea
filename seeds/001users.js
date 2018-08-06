
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Alis',email:'alis@wonderland.com',hashed_password: '$2b$08$be6vqFCWkEfNV1BK93.LiuZxuX1fJY0NZylXt1F3iZnZrk.NHY6qu'},
        {id: 2, name: 'Nipun',email:'nipun@grandmother.com',hashed_password: '$2b$08$a0iWX97/CgIcmtmOfPPfHuK4LiAw.2i3xdGx1dgE5bcdAqb0t7WjG'},
        {id: 3, name: 'Hilary' ,email:'hilray@party.com',hashed_password: '$2b$08$lU7LYTw6ad50s02j.a6cweQQUA3Y8oMY2BdAbgHBwt3XyfWRKdON6'}
      ]);
    });
};


//name,email, password,
