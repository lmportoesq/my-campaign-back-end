const { Router } = require('express');
const {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerUpdateUser,
  handlerDeleteUser,
} = require('./user.controller');

//const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();
router.post('/',handlerCreateUser);

router.get('/', handlerGetAllUsers);
router.get('/:id', handlerGetOneUser);
router.patch('/:id', handlerUpdateUser);
router.delete('/:id', handlerDeleteUser);

module.exports = router;
