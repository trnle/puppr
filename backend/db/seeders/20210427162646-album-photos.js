'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AlbumPhotos', [
      { photoId: 1, albumId: 6 },
      { photoId: 2, albumId: 7 },
      { photoId: 3, albumId: 6 },
      { photoId: 4, albumId: 6 },
      { photoId: 5, albumId: 6 },
      { photoId: 6, albumId: 7 },
      { photoId: 7, albumId: 6 },
      { photoId: 8, albumId: 6 },
      { photoId: 9, albumId: 6 },
      { photoId: 10, albumId: 3 },
      { photoId: 11, albumId: 3 },
      { photoId: 12, albumId: 3 },
      { photoId: 13, albumId: 4 },
      { photoId: 14, albumId: 4 },
      { photoId: 15, albumId: 3 },
      { photoId: 16, albumId: 5 },
      { photoId: 17, albumId: 5 },
      { photoId: 18, albumId: 5 },
      { photoId: 19, albumId: 5 },
      { photoId: 20, albumId: 5 },
      { photoId: 21, albumId: 1 },
      { photoId: 22, albumId: 1 },
      { photoId: 23, albumId: 1 },
      { photoId: 24, albumId: 2 },
      { photoId: 25, albumId: 2 },
      { photoId: 26, albumId: 1 },
      { photoId: 27, albumId: 1 },
      { photoId: 28, albumId: 2 },
      { photoId: 29, albumId: 2 },
      { photoId: 30, albumId: 2 },
      { photoId: 31, albumId: 2 },
      { photoId: 32, albumId: 2 },
      { photoId: 33, albumId: 8 },
      { photoId: 34, albumId: 8 },
      { photoId: 35, albumId: 8 },
      { photoId: 36, albumId: 8 },
      { photoId: 37, albumId: 8 },
      { photoId: 38, albumId: 8 },
      { photoId: 39, albumId: 8 },
      { photoId: 40, albumId: 1 },
      { photoId: 41, albumId: 1 },
      { photoId: 42, albumId: 4 },
      { photoId: 43, albumId: 6 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AlbumPhotos', null, {});
  }
};
