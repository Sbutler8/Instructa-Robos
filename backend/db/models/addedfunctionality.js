'use strict';
module.exports = (sequelize, DataTypes) => {
  const AddedFunctionality = sequelize.define('AddedFunctionality', {
    name: DataTypes.STRING,
    code: DataTypes.TEXT,
    vidPic: DataTypes.STRING,
    projectId: DataTypes.INTEGER

  },{});
  AddedFunctionality.associate = function(models) {
    // associations can be defined here
  };
  return AddedFunctionality;
};
