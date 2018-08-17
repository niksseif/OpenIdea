
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Alis',email:'alis@wonderland.com',image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVhVGBuazB9bab2M-eH5weR_NFH9vqibisXZ7OdxFnvnB4ytR", hashed_password: '$2b$08$be6vqFCWkEfNV1BK93.LiuZxuX1fJY0NZylXt1F3iZnZrk.NHY6qu'},
        { name: 'Nipun',email:'nipun@grandmother.com',image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwH9DCM75f13HIcF0PmBnDf8o2WVrCHk6haHMCNrTlfkO_iqy", hashed_password: '$2b$08$a0iWX97/CgIcmtmOfPPfHuK4LiAw.2i3xdGx1dgE5bcdAqb0t7WjG'},
        { name: 'Hilary' ,email:'hilray@party.com',image_url: "https://www.w3schools.com/howto/img_avatar2.png", hashed_password: '$2b$08$lU7LYTw6ad50s02j.a6cweQQUA3Y8oMY2BdAbgHBwt3XyfWRKdON6'}
      ]);
    });
};


//name,email, password,
