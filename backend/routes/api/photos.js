const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { User, Photo, Comment } = require('../../db/models');

const router = express.Router();

// show all photos in db
router.get('', asyncHandler(async (req, res) => {
  const photos = await Photo.findAll({ include: User, limit: 10 })
  return res.json(photos);
}))

// show specific photo
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  let photo = await Photo.findByPk(id, { include: [User] });

  return res.json(photo);
}))

// update user photo info
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, caption } = req.body;
  const photo = await Photo.findByPk(id)
  await photo.update({ title, caption })
  return res.json(photo)
}))

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletePhoto = await Photo.findByPk(id);
  await deletePhoto.destroy();
  res.status(204).end();
}))

// upload image
router.post('', requireAuth, asyncHandler(async (req, res) => {
  const { title, caption, imgURL } = req.body;
  console.log('user',req.user.id);
  const photo = await Photo.create(title, caption, imgURL, req.user.id);
  return res.json(photo)
}))

// router.get('/:id(\\d+)/comments', asyncHandler(async(req, res) => {
//   const {id} = req.params;
//   const comments = await Comment.findAll({where: {photoId: id}, include: User})
//   return res.json(comments);
// }))

module.exports = router;