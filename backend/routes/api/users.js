const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Album, Photo, Comment } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('firstName')
    .notEmpty()
    .withMessage('Please provide a first name.'),
  check('lastName')
    .notEmpty()
    .withMessage('Please provide a last name.'),
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .isLength({ min: 4 })
    .withMessage('Username must be 4 characters or more.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    const user = await User.signup({ firstName, lastName, username, email, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

// show user info with photos for photostream
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await Photo.findAll({ where: { userId: id }, include: User })
  return res.json(user);
}));

router.get('/:id(\\d+)/comments', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userComments = await Comment.findAll({ where: { userId: id } });
  return res.json(userComments);
}))

// show user's albums
router.get('/:id(\\d+)/albums', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const albums = await Album.findAll({ where: { userId: id }, include: [Photo, User] });
  return res.json(albums);
}))

module.exports = router;