import RecipeController from '../../controllers/recipe-controller.js';
import UserController from '../../controllers/user-controller.js';
import { isLoggedIn, checkSignInDetails, checkSignUpDetails } from '../../middlewares/middlewares.js';


const routes = (app) => {
  app.get('/', (req, res) => res.json({ title: 'Welcome to MoreRecipes' }));

  app.get('/api/v1/users/:userId', UserController.getUserDetails);

  app.post('/api/v1/users/signup', checkSignUpDetails, UserController.postSignUp);

  app.post('/api/v1/users/signin', checkSignInDetails, UserController.postSignIn);

  app.get('/api/v1/recipes/:recipeId', RecipeController.getRecipe);

  app.post('/api/v1/recipes', isLoggedIn, RecipeController.postRecipe);

  app.post('/api/v1/recipes/favorite/:recipeId', isLoggedIn, RecipeController.postFavoriteRecipe);

  app.put('/api/v1/recipes/:recipeId', isLoggedIn, RecipeController.putRecipe);

  app.delete('/api/v1/recipes/:recipeId', isLoggedIn, RecipeController.deleteRecipe);

  app.post('/api/v1/recipes/:recipeId/reviews', isLoggedIn, RecipeController.postRecipeReview);

  app.get('/api/v1/recipes', RecipeController.getAllRecipes);

  app.get('/api/v1/users/:userId/recipes', UserController.getUserRecipes);

  app.get('/api/v1/users/:userId/recipes/favorite', isLoggedIn, UserController.getFavoriteRecipes);
};

export default routes;

