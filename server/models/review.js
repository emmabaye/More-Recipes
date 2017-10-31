'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
 Review.associate = (models) => {
  Review.belongsTo(models.Recipe,{
    foreignKey: 'recipeId',
    onDelete: 'CASCADE'
  });
  Review.belongsTo(models.User,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
}
  return Review;
};