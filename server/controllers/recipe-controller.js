/* import recipes from '../models/dummy-data.js';

class RecipeController {
  static postRecipe(req, res) {
  	recipes.push(req.body);
  	res.json(recipes);
  }

  static putRecipe(req, res) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id == req.params.recipeId) {
        for (let j = 0; j < Object.keys(req.body).length; j++) {
          recipes[i][Object.keys(req.body)[j]] = req.body[Object.keys(req.body)[j]];
        }
        return res.json(recipes);
      }
    }

    return res.status(404).json({ error: 'Not found' });
  }

  static deleteRecipe(req, res) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id == req.params.recipeId) {
        recipes.splice(i, 1);
        return res.json(recipes);
      }
    }

    return res.status(404).json({ error: 'Not found' });
  }

  static getRecipes(req, res) {
    if (req.query.sort == 'upvotes' && req.query.order == 'des') {
      const sortedRecipes = recipes.sort((a, b) => b.upvotes - a.upvotes);
      return res.json(sortedRecipes);
    }

    return res.json(recipes);
  }

  static postRecipeReview(req, res) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id == req.params.recipeId) {
        recipes[i].reviews.push(req.body);
        return res.json(recipes);
      }
    }

    return res.status(404).json({ error: 'Not found' });
  }
}


export default RecipeController;

*/

