'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    directions: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Recipe.belongsTo(models.User);
        Recipe.hasMany(models.Vote);
        Recipe.hasMany(models.Reviews);
      }
    }
  });
  return Recipe;
};