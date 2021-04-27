const express = require('express')
const asyncHandler = require('express-async-handler');

const { Photo, Comment } = require('../../db/models');

// const { singlePublicFileUpload, singleMulterUpload, multiplePublicFileUpload } = require('../../awsS3');

const router = express.Router();

// show all photos in db
router.get('', asyncHandler(async (req, res) => {
  const photos = await Photo.findAll()
  return res.json(photos);
}))

// show user's photostream
router.get('/users/:userId', asyncHandler(async (req, res) => {
  const { userId } = req.params;
  let photos = await Photo.findAll({ where: { userId } });

  return res.json(photos);
}))

// show specific photo
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  let photo = await Photo.findByPk(id, { include: [Comment] });
 
  return res.json(photo);
 
}))



// show user's photos
// router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const user = await Photo.findAll({ where: { userId: id } })
//   return res.json(user);
// }));



module.exports = router;