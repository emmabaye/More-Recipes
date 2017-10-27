# More-Recipes

[![Build Status](https://travis-ci.org/emmabaye/more-recipes.svg?branch=master)](https://travis-ci.org/emmabaye/more-recipes)
[![Coverage Status](https://coveralls.io/repos/github/emmabaye/more-recipes/badge.svg?branch=master)](https://coveralls.io/github/emmabaye/more-recipes?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/bdd1ed14d9a5842f38b0/maintainability)](https://codeclimate.com/github/emmabaye/more-recipes/maintainability)


Application for sharing recipes. Built for Andela Developer Challenge, bootcamp-28

Live at https://emmabaye.github.io/more-recipes/template/

Server-side API live at https://more-recipes-emmabaye.herokuapp.com

## Challenge 2 routes
* An API route that allows a user add a recipe:
```
POST : /api/v1/recipes
```

* An API route that allows a user modify a recipe
```
PUT : /api/v1/recipes/<recipeId>
```

* An API route that allows a user to delete a recipe
```
DELETE : /api/v1/recipes/<recipeId>
```

* An API route that allows a user to get all recipes in the application
```

GET: /api/v1/recipes
 ```
* An API route that allows 
a user post a review for a recipe
```
POST : /api/v1/recipes/<recipeId>/reviews
```

* An API route that allows a user to get just recipes with the most upvotes
```
GET : /api/v1/recipes?sort=upvotes&order=des
```  
  

### Installation
* Ensure you have node 8.x.x installed.
* Install node modules with command
```
npm install
```
* Start API server with command
```
npm start
```
* Check index with postman
```
http:localhost:3000
```
* Run test with 
```
npm test
```