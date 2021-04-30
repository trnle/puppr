const express = require('express')
const asyncHandler = require('express-async-handler');

const { Album, Photo } = require('../../db/models');

const router = express.Router();

// show specific album
// router.get('/:albumId(\\d+)', asyncHandler(async (req, res) => {
//   const { albumId } = req.params;
//   let album = await Album.findByPk(albumId, { include: Photo });

//   return res.json(album);
// }))


module.exports = router;