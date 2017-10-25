let routes = (app) => {
  app.post('/api/recipes', (req, res) => {
  	console.log('user add a recipe');
  });

  app.put('/api/recipes/:recipeId', (req, res) => {
  	console.log('user modify a recipe');
  });

  app.delete('/api/recipes/:recipeId', (req, res) => {
  	console.log('user delete a recipe');
  });

  

  app.post('/api/recipes/:recipeId/reviews', (req, res) => {
  	console.log('user post a review for a recipe');
  });

  app.get('/api/recipes?sort=upvotes&order=des', (req, res) => {
  	console.log('user just recipes wih the most upvotes');
  });

  app.get('/api/recipes', (req, res) => {
  	console.log('user get all recipes');
  });
};

export { routes };

