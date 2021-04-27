const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const photosRouter = require('./photos');
const albumsRouter = require('./albums');
// const commentsRouter = require('./comments');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/photos', photosRouter);
router.use('/albums', albumsRouter);
// router.use('/comments', commentsRouter);

module.exports = router;