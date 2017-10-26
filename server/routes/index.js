// import { RecipeController } from '../controllers/recipe-controller.js';
const RecipeController = require('../controllers/recipe-controller.js');

const routes = (app) => {
  app.get('/', (req, res) => res.json({ title: 'Welcome to MoreRecipes' }));

  app.post('/api/recipes', RecipeController.postRecipe);

  app.put('/api/recipes/:recipeId', RecipeController.putRecipe);

  app.delete('/api/recipes/:recipeId', RecipeController.deleteRecipe);

  app.post('/api/recipes/:recipeId/reviews', RecipeController.postRecipeReview);

  app.get('/api/recipes', RecipeController.getRecipes);
};

module.exports = routes;
// export { routes };

