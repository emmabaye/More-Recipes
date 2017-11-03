import Model from '../models';
import jwt from 'jsonwebtoken';

const Recipe = Model.Recipe;
const User = Model.User

class RecipeController {

  // GET: Get details of a recipe by id
  static getRecipe(req, res) {
    return Recipe.findById(req.params.recipeId)
    .then(recipe => {
      if(!recipe){
        res.status(404).json({error: "Recipe not found"})
      }
     
      res.status(200).json({status: "success", data:recipe});
    });
  }

  // POST: method for authenticated user to add a recipe
  static postRecipe(req, res) {
    const userId = jwt.verify(req.headers['x-access-token'], process.env.SECRET).id;
    Recipe.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      creatorId: userId
    })
      .then((recipe) => {
        if (!recipe) {
          return res.status(500).send({ message: 'Server error. Recipe could not be created' });
        }
        return res.status(200).send(recipe);
      }).catch(error => {
        return res.status(401).send({ message: 'Unauthorized. Pls sign in' });
      });
  }


  static putRecipe(req, res) {
    const userId = jwt.verify(req.headers['x-access-token'], process.env.SECRET).id;
    Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).send({ error: 'Recipe not found' });
        }

        if (userId != recipe.creatorId) {
          return res.status(400).send({ error: 'You do not have permnission to modify this recipe' });
        }

        Recipe.update({
          name: req.body.name || recipe.name,
          ingredients: req.body.ingredients || recipe.ingredients,
          directions: req.body.directions || recipe.directions,
        }, {
          where: {
            id: req.params.recipeId,
          },
        }).then((updatedRecipe) => {
          if (!updatedRecipe) {
            return res.status(500).send({ error: 'Could not update recipe' });
          }

          return res.status(200).send({ message: 'Recipe Updated'});
        });
      });
  }


  static deleteRecipe(req, res) {
    const userId = jwt.verify(req.headers['x-access-token'], process.env.SECRET).id;
    Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).send({ error: 'Recipe not found' });
        }

        if (userId != recipe.creatorId) {
          return res.status(400).send({ error: 'You do not have pernission to modify this recipe' });
        }

        Recipe.destroy({
          where: {
            id: req.params.recipeId,
          },
        })
          .then((deletedRecipe) => {
            if (!deletedRecipe) {
              return res.status(500).send({ error: 'Could not delete recipe' });
            }

            return res.status(200).send({ message: 'Recipe deleted' });
          });
      });
  }


  static getAllRecipes(req, res) {
    
    if(req.query.sort == 'upvotes' && req.query.order == 'desc') {
      return Recipe.findAll({
      limit:30,
      order: [[req.query.sort, req.query.order]]
    }).then((recipes) => {
      if (!recipes) {
        return res.status(500).send({
          error: 'Could not get all recipes',
        });
      }
      return res.status(200).send(recipes);
    });
    }

    return Recipe.findAll()
      .then((recipes) => {
        if (!recipes) {
          return res.status(500).send({ error: 'Could not get all recipes' });
        }

        return res.status(200).send(recipes);
      });
  }


  static postRecipeReview(req, res) {
    const userId = jwt.verify(req.headers['x-access-token'], process.env.SECRET).id;
    Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).send({ error: 'Recipe not found' });
        }

        recipe.reviews.push({
          id: recipe.reviews.length + 1,
          userId,
          name: req.body.name,
          comment: req.body.comment,
        });

        Recipe.update({
          reviews: recipe.reviews,
        }, {
          where: {
            id: req.params.recipeId,
          },
        }).then((updatedRecipe) => {
          if (!updatedRecipe) {
            return res.status(500).send({ error: 'Could not post reviews' });
          }

          return res.status(200).send({ message: 'Review posted' });
        });
      });
  }


  //POST: Mark a recipe as favorite
 static postFavoriteRecipe(req, res) {
      const userId = jwt.verify(req.headers['x-access-token'], process.env.SECRET).id;
      return Recipe.findOne({where: {
        id: req.params.recipeId
        }
    }).then(recipe => {
        if(!recipe){
          return res.status(404).send({error: "Recipe not found"})
        }

        User.findById(userId)
        .then(user => {

          user.favoriteRecipes.push({
              "id": req.params.recipeId,
              "name": recipe.name,
              "creatorId": userId
            });

          User.update({
            favoriteRecipes: user.favoriteRecipes
          }, {
            where: {
              id: req.params.userId
            },
          }).then((user) => {
            if (!user) {
              return res.status(500).send({
                error: 'Could not favorite recipe'
              });
            }

            return res.status(200).send({
              status: "Success",
              data: user.favoriteRecipes
            });
          });

        });


      });

  }


}


export default RecipeController;

