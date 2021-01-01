'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AddedFunctionalities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      code: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      vidPic: {
        type: Sequelize.STRING(1000),
        allowNull:true
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model: 'Projects' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AddedFunctionalities');
  }
};
