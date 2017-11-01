'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: DataTypes.STRING,
    recipeId: DataTypes.STRING
  }); 
      Favorite.associate = (models) => {
        Favorite.belongsTo(models.User, {
          foreignKey:'userId',
          onDelete: 'CASCADE'
        });
        Favorite.belongsTo(models.Recipe,{
          foreignKey: 'recipeId',
          onDelete: 'CASCADE'
        });
      };

  return Favorite;
};