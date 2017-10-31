'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vote = sequelize.define('Vote', {
    upvote: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {min: 0}
    },
    downvote: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {min: 0}
    }
  }, {
    classMethods: {
      associate: function(models) {
        Vote.belongsTo(models.User, {
          foreignKey:'userId',
          onDelete: 'CASCADE'
        });
        Vote.belongsTo(models.Recipe,{
          foreignKey: 'recipeId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Vote;
};