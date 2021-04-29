const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { User, Photo, Comment } = require('../../db/models');

const router = express.Router();

// show comments for specific photo
router.get('/photos/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const comments = await Comment.findAll({ where: { photoId: id }, include: User })
  return res.json(comments);
}))

// update comment for specific photo
router.put('/photos/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  const comment = await Comment.findOne({ where: { photoId: id } });
  await comment.update({ body });
  return res.json(comment);
}))


module.exports = router;