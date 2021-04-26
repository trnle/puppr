const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const exploreRouter = require('./explore.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/explore', exploreRouter);

module.exports = router;