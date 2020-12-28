'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoriesAndProject = sequelize.define('CategoriesAndProject', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  CategoriesAndProject.associate = function(models) {
    // associations can be defined here
  };
  return CategoriesAndProject;
};