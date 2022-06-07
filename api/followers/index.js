const { Router } = require('express');
const {
  handlerCreateFollower,
  handlerGetAllFollowers,
  handlerGetOneFollower,
  handlerUpdateFollower,
  handlerDeleteFollower,
} = require('./followers.controller');

const router = Router();
router.post('/', handlerCreateFollower);

router.get('/', handlerGetAllFollowers);
router.get('/:id', handlerGetOneFollower);
router.delete('/:id', handlerDeleteFollower);
router.patch('/:id', handlerUpdateFollower);

module.exports = router;
