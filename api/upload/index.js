const { Router } = require('express');
const multer = require('multer');
const {
  handlerCreateImage,
} = require('./upload.controller');

const router = Router();

const upload = multer({ dest: './temp' });

router.post('/image', upload.single('file'), handlerCreateImage);

module.exports = router;
