const { Router } = require('express');
const {
  handlerCreateLeader,
  handlerGetAllLeaders,
  handlerGetOneLeader,
  handlerUpdateLeader,
} = require('./Leader.controller');

const router = Router();
router.post('/', handlerCreateLeader);

router.get('/', handlerGetAllLeaders);
router.get('/:id', handlerGetOneLeader);
router.patch('/:id', handlerUpdateLeader);

module.exports = router;
