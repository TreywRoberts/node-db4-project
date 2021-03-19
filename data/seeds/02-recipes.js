
exports.seed = function(knex, Promise) {
  
      return knex('recipes').insert([
        {recipe_name: 'Apple Pie'},
        {recipe_name: 'Pizza'}
        
      ]);
};
