
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Apples'},
        {ingredient_name: 'butter'}
       
      ]);
};
