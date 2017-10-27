const RecipeController = require('../../controllers/recipe-controller.js');

const routes = (app) => {
  app.get('/', (req, res) => res.json({ title: 'Welcome to MoreRecipes' }));

  app.post('/api/v1/recipes', RecipeController.postRecipe);

  app.put('/api/v1/recipes/:recipeId', RecipeController.putRecipe);

  app.delete('/api/v1/recipes/:recipeId', RecipeController.deleteRecipe);

  app.post('/api/v1/recipes/:recipeId/reviews', RecipeController.postRecipeReview);

  app.get('/api/v1/recipes', RecipeController.getRecipes);
};

module.exports = routes;

