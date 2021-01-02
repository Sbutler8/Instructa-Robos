'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    code: DataTypes.TEXT,
    instructions:DataTypes.TEXT,
    robotPicURL: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Project.associate = function(models) {
    Project.hasMany(models.AddedFunctionality, { foreignKey: 'projectId'});

    const columnMapping = {
      through: 'CategoriesAndProject',
      otherKey: 'categoryId',
      foreignKey: 'projectId'
    }
    Project.belongsToMany(models.Category, columnMapping);
  };
  return Project;
};
