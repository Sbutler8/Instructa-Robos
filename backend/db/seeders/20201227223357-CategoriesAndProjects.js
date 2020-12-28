'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategoriesAndProjects', [
      {categoryId: 1, projectId: 1},
      {categoryId: 1, projectId: 2},
      {categoryId: 1, projectId: 3},
      {categoryId: 1, projectId: 4},
      {categoryId: 1, projectId: 5},
      {categoryId: 1, projectId: 6},
      {categoryId: 2, projectId: 7},
      {categoryId: 2, projectId: 8},
      {categoryId: 2, projectId: 9},
      {categoryId: 2, projectId: 10},
      {categoryId: 2, projectId: 11},
      {categoryId: 2, projectId: 12},
      {categoryId: 2, projectId: 13},
      {categoryId: 2, projectId: 14},
      {categoryId: 2, projectId: 15},
      {categoryId: 3, projectId: 16},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoriesAndProjects', null, {});
  }
};
