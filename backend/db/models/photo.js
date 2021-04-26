'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    caption: {
      type: DataTypes.TEXT
    },
    imgURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Photo.associate = function (models) {
    // associations can be defined here
    Photo.belongsTo(models.User, { foreignKey: 'userId' });
    Photo.hasMany(models.Comment, { foreignKey: 'photoId' });
    const columnMapping = {
      foreignKey: 'photoId',
      otherKey: 'albumId',
      through: 'AlbumPhoto'
    }
    Photo.belongsToMany(models.Album, columnMapping);
  };
  return Photo;
};