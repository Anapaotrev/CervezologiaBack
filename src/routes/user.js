const express = require('express');
const userController = import('./../controllers/users');
const router = express.Router();

router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/user', userController.getUser);
router.get('/users', userController.getUsers);
router.post('/register', userController.newUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

module.exports = router;