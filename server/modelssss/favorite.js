'use strict';
module.exports = (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    userId: DataTypes.STRING,
    recipeId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Favorite.belongsTo(models.User, {
          foreignKey:'userId',
          onDelete: 'CASCADE'
        });
        Favorite.belongsTo(models.Recipe,{
          foreignKey: 'recipeId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Favorite;
};