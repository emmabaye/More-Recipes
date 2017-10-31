//import  RecipeController  from '../../controllers/recipe-controller.js';
import UserController from '../../controllers/user-controller.js';

const routes = (app) => {
  app.get('/', (req, res) => res.json({ title: 'Welcome to MoreRecipes' }));

  app.post('/api/v1/users/signup', UserController.postSignUp );

  app.post('/api/v1/users/signin', UserController.postSignIn )

 // app.post('/api/v1/recipes', RecipeController.postRecipe);

 // app.put('/api/v1/recipes/:recipeId', RecipeController.putRecipe);

 // app.delete('/api/v1/recipes/:recipeId', RecipeController.deleteRecipe);

  //app.post('/api/v1/recipes/:recipeId/reviews', RecipeController.postRecipeReview);

 // app.get('/api/v1/recipes', RecipeController.getRecipes);
};

export default routes;

