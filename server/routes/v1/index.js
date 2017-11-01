import RecipeController from '../../controllers/recipe-controller.js';
import UserController from '../../controllers/user-controller.js';
import { isLoggedIn } from '../../middlewares/middlewares.js';


const routes = (app) => {
  app.get('/', (req, res) => res.json({ title: 'Welcome to MoreRecipes' }));

  app.post('/api/v1/users/signup', UserController.postSignUp);

  app.post('/api/v1/users/signin', UserController.postSignIn);

  app.post('/api/v1/recipes', isLoggedIn, RecipeController.postRecipe);

  app.put('/api/v1/recipes/:recipeId',isLoggedIn,RecipeController.putRecipe);

  app.delete('/api/v1/recipes/:recipeId', isLoggedIn,RecipeController.deleteRecipe);

  // app.post('/api/v1/recipes/:recipeId/reviews', RecipeController.postRecipeReview);

  app.get('/api/v1/recipes', RecipeController.getAllRecipes);
};

export default routes;

