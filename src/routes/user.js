const express = require('express');
const userController = require('./../controllers/users');
const auth = require('./../middleware/auth');
const router = express.Router();

router.post('/login', userController.login);
router.get('/logout', auth, userController.logout);
router.get('/user', auth, userController.getUser);
router.get('/users', auth, userController.getUsers);
router.get('/favorites', auth, userController.getFavorites);
router.post('/register', userController.newUser);
router.put('/user', auth, userController.updateUser);
router.delete('/user', auth, userController.deleteUser);

module.exports = router;