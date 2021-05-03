const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Album, AlbumPhoto } = require('../../db/models');

const router = express.Router();

// show specific album
// router.get('/:albumId(\\d+)', asyncHandler(async (req, res) => {
//   const { albumId } = req.params;
//   let album = await Album.findByPk(albumId, { include: Photo });

//   return res.json(album);
// }))

router.post('', requireAuth, asyncHandler(async (req, res) => {
  const { name, description, userId } = req.body;
  const newAlbum = await Album.create({ name, description, userId });
  return res.json(newAlbum);
}))

router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const { photoId, albumId } = req.body;
  await AlbumPhoto.create({ photoId, albumId });
}))


module.exports = router;