const express = require('express');
const Recipes = require('./recipe-model');
const router = express.Router()

// router.get('/', (req, res, next)=>{
//     Recipes.getRecipeById()
//      .then(recipe=>{
//          res.json(recipe)
//      })
//      .catch(next)
// })

router.get('/:recipe_id', async (req, res, next) => {
    const { recipe_id } = req.params;
  
    try {
      const recipe = await Recipes.getById(recipe_id);
      res.json(recipe);
    } catch(err) { next(err) }
  });




router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      error: err.message,
      stack: err.stack,
    })
  })

  module.exports = router