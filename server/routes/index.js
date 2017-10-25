//import { RecipeController } from '../controllers/recipe-controller.js';
const RecipeController = require('../controllers/recipe-controller.js');

let routes = (app) => {
  app.post('/api/recipes', RecipeController.postRecipe);

  app.put('/api/recipes/:recipeId', RecipeController.putRecipe);

  app.delete('/api/recipes/:recipeId', RecipeController.deleteRecipe); 

  app.post('/api/recipes/:recipeId/reviews', RecipeController.postRecipeReview);

 // app.get('/api/recipes?sort=upvotes&order=des', RecipeController.getRecipesWithMostVote);

  app.get('/api/recipes', RecipeController.getRecipes);
};

module.exports = routes;
//export { routes };

