const { Router } = require('express');
const {
  handlerCreateFollower,
  handlerGetAllFollowers,
  handlerGetOneFollower,
  handlerUpdateFollower,
} = require('./followers.controller');

const router = Router();
router.post('/', handlerCreateFollower);

router.get('/', handlerGetAllFollowers);
router.get('/:id', handlerGetOneFollower);
router.patch('/:id', handlerUpdateFollower);

module.exports = router;
