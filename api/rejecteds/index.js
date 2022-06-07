const { Router } = require('express');
const {
  handlerCreateRejected,
  handlerGetAllRejecteds,
  handlerGetOneRejected,
  handlerUpdateRejected,
  handlerDeleteRejected,
} = require('./rejected.controller');

const router = Router();
router.post('/', handlerCreateRejected);

router.get('/', handlerGetAllRejecteds);
router.get('/:id', handlerGetOneRejected);
router.delete('/:id', handlerDeleteRejected);
router.patch('/:id', handlerUpdateRejected);

module.exports = router;
