'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    firstName: { types: DataTypes.STRING, allowNull: false },
    lastName: { types: DataTypes.STRING, allowNull: false },
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};