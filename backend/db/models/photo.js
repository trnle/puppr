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
    // Photo.hasMany(models.Comment, { foreignKey: 'photoId' });
    // delete comment association
    Photo.hasMany(models.Comment, {foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true});
    Photo.hasMany(models.AlbumPhoto, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true });
    const columnMapping = {
      foreignKey: 'photoId',
      otherKey: 'albumId',
      through: 'AlbumPhoto',
      onDelete: 'CASCADE'
    }
    Photo.belongsToMany(models.Album, columnMapping);
  };

  Photo.uploadImage = async function (title, description, imgUrl, userId) {
    const photo = await Photo.create({
      title,
      description,
      imgUrl,
      userId
    });
    return photo;
  };

  return Photo;
};