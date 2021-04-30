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

// create comment for specific photo
router.post('/photos/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { body, userId } = req.body;

  const newComment = await Comment.create(
    { body, userId, photoId: id },
  )
  
  const data = await Comment.findByPk(newComment.id, { include: User });
  return res.json(data);
}))

// update comment for specific photo
// router.put('/photos/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const { body } = req.body;
//   const comment = await Comment.findOne({ where: { photoId: id } });
//   await comment.update({ body });
//   return res.json(comment);
// }))

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findByPk(id);
  await comment.destroy();
  res.status(204).end();
}))

module.exports = router;