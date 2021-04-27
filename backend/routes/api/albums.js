const express = require('express')
const asyncHandler = require('express-async-handler');

const { Album } = require('../../db/models');

const router = express.Router();

// show specific album
router.get('/:albumId(\\d+)', asyncHandler(async (req, res) => {
  const { albumId } = req.params;
  let album = await Album.findByPk(albumId);

  return res.json(album);
}))


// show user's albums
// router.get('/:id(\\d+)/albums', asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const albums = await Album.findAll({ where: { userId: id } });
//   return res.json(albums);
// }))

module.exports = router;