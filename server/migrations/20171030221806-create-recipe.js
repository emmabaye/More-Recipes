'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ingredients: {
        type: Sequelize.STRING,
        allowNull: false
      },
      directions: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: true
      },
      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reviews: {
      type: Sequelize.JSONB,
      allowNull: true,
      defaultValue: new Array()
      },
      upvotes: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      downvotes: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      views: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};