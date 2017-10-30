'use strict';
module.exports = (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    userId: DataTypes.STRING,
    recipeId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Favorite.belongsTo(Users);
        Favorite.belongsTo(Recipes);
      }
    }
  });
  return Favorite;
};