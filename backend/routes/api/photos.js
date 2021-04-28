const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { User, Photo, Comment } = require('../../db/models');

const { singlePublicFileUpload, singleMulterUpload, multiplePublicFileUpload } = require('../../awsS3');

const router = express.Router();

// show all photos in db
router.get('', asyncHandler(async (req, res) => {
  const photos = await Photo.findAll({ include: User, limit: 10 })
  return res.json(photos);
}))

// show specific photo
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  let photo = await Photo.findByPk(id, { include: [User] });

  return res.json(photo);
}))

// update user photo info
router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, caption } = req.body;
  const photo = await Photo.findByPk(id)
  await photo.update({ title, caption })
  return res.json(photo)
}))

// upload image
// router.post('', requireAuth, singleMulterUpload('image'), asyncHandler(async(req, res) => {
//   const {username} = req;
//   const {title, caption} = req.body;
//   const imgURL = await singlePublicFileUpload(req.file);
//   Photo.uploadImage(title, caption, imgURL, username.id);
//   return res.json({user})
// }))

module.exports = router;