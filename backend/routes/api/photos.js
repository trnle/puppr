// const express = require('express')
// const asyncHandler = require('express-async-handler');

// const { setTokenCookie, requireAuth } = require('../../utils/auth');
// const { Photo } = require('../../db/models');

// const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');

// const router = express.Router();

// router.get('/:id(\\d+)', singleMulterUpload('image'), asyncHandler(async (req, res, next) => {
//   const { photoId } = req.params;
//   let photo = await Photo.findByPk(photoId);
//   return res.json({ photo });
// }))

// // router.get('/', requireAuth, singleMulterUpload('image'), asyncHandler(async (req, res, next) => {
// //   const { user } = req;
// //   const { title } = req.body;
// // }))

// module.exports = router;