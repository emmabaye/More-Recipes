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
        Vote.belongsTo(Users);
        Vote.belongsTo(Recipes);
      }
    }
  });
  return Vote;
};