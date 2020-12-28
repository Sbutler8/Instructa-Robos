'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    const columnMapping = {
      through: 'CategoriesAndProject',
      otherKey: 'projectId',
      foreignKey: 'categoryId'
    }
    Category.belongsToMany(models.Project, columnMapping);
  };
  return Category;
};
