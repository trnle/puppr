'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};