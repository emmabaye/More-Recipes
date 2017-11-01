import Model from '../models';
import jwt from 'jsonwebtoken';

const Recipe = Model.Recipe;

class RecipeController {
  // POST: method for authenticated user to add a recipe
  static postRecipe(req, res) {
    const userId = jwt.verify(req.headers['x-access-token'], 'secretKey').id;
    Recipe.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      creatorId: userId,
    })
      .then((recipe) => {
        if (!recipe) {
          return res.status(500).send({ message: 'Server error. Recipe could not be created' });
        }
        return res.status(200).send(recipe);
      });
  }


  static putRecipe(req, res) {
    const userId = jwt.verify(req.headers['x-access-token'], 'secretKey').id;
    Recipe.findById(req.params.recipeId)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).send({ error: 'Recipe not found' });
        }

        if (userId != recipe.creatorId) {
          console.log('USERID ', userId);
          console.log('recipeID', recipe.creatorId);
          return res.status(400).send({ error: 'You do not have pernission to modify this recipe' });
        }

        Recipe.update({
          name: req.body.name || recipe.name,
          ingredients: req.body.ingredients || recipe.ingredients,
          directions: req.body.directions || recipe.directions,
        }, {
          where: {
            userId: recipe.creatorId,
          },
        }).then((updatedRecipe) => {
          if (!updatedRecipe) {
            return res.status(500).send({ error: 'Could not update recipe' });
          }

          return res.status(200).send({ message: 'Recipe Updated' });
        });
      });
  }
}


export default RecipeController;

