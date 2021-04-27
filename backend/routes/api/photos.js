const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Photo } = require('../../db/models');

// const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

const router = express.Router();

// show all photos in db
router.get('/', requireAuth, asyncHandler(async (req, res) => {
  let photos = await Photos.findAll()
  return res.json(JSON.stringify(photos));
}))

// show user's photostream
router.get('/users/:userId', asyncHandler(async (req, res) => {
  const { userId } = req.params;
  let photos = await Photos.findAll({ where: { userId } });

  return res.json(JSON.stringify(photos));
}))

// show specific photo
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  let photo = await Photos.findByPk(id);
  if (photo) {
    return res.json({ imgURL: photo.imgURL });
  } else {
    return res.status(400).send({ message: 'Photo Not Found.'});
  }
}))

module.exports = router;