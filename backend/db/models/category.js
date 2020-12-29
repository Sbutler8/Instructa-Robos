'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
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
