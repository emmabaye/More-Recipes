// import { recipes } from '../models/dummy-data.js';
const recipes = require('../models/dummy-data.js');

class RecipeController {
  static postRecipe(req, res, next) {
    console.log('req.body: ', req.body);
  	recipes.push(req.body);
  	res.json(recipes);
  }

  static putRecipe(req, res, next) {
    console.log(req.params.recipeId);

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id == req.params.recipeId) {
        recipes[i] = req.body;
      }
    }

    return res.json(recipes);
  }

  static deleteRecipe(req, res, next) {
    console.log(req.params.recipeId);

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id == req.params.recipeId) {
        recipes.splice(i, 1);
      }
    }

    return res.json(recipes);
  }

  static getRecipes(req, res, next) {
    if (req.query.sort == 'upvotes' && req.query.order == 'des') {
      const sortedRecipes = recipes.sort((a, b) => b.upvotes - a.upvotes);
      return res.json(sortedRecipes);
    }

    return res.json(recipes);
  }

  static postRecipeReview(req, res, next) {
    console.log(req.params.recipeId);

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id == req.params.recipeId) {
        recipes[i].reviews.push(req.body.review);
      }
    }

    return res.json(recipes);
  }
}

// export { RecipeController };
module.exports = RecipeController;

