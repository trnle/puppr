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


module.exports = router;