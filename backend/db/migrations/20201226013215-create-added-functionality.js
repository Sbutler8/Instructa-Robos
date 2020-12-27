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
      vidPic: {
        type: Sequelize.BLOB,
        allowNull:true
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model: 'Projects' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AddedFunctionalities');
  }
};
