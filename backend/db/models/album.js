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
  Album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' });
    const columnMapping = {
      foreignKey: 'albumId',
      otherKey: 'photoId',
      through: 'AlbumPhoto'
    }
    Album.belongsToMany(model.Photo, columnMapping);
  };
  return Album;
};