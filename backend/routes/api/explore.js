const express = require('express')
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const asyncHandler = require('express-async-handler');

const { Photo } = require('../../db/models/photo');

router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
  if (req.session.user) {
    const { userId } = req.session.auth;
    const user = await User.findByPk(userId);
    console.log(user);
    return res.json({ user })
  }
  next();
}))

module.exports = router;