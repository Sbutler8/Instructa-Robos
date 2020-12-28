'use strict';

module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});

  Category.associate = function (models) {
    var columnMapping = {
      through: 'CategoriesAndProject',
      otherKey: 'projectId',
      foreignKey: 'categoryId'
    };
    List.belongsToMany(models.Project, columnMapping);
  };

  return Category;
};