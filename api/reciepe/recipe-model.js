const db = require('./../../data/db-config')

const getById = async (recipe_id) => {
    const recipeData = await db('recipes as r')
      
      .join('steps as s', 'r.recipe_id', 's.recipe_id')
      .leftJoin('step_ingredients as si','s.step_id', 'si.step_id')
      .leftJoin('ingredients as i','si.ingredient_id', 'i.ingredient_id')
      .where('r.recipe_id', recipe_id)
    
    return recipeData
  };

module.exports ={
    getById
}