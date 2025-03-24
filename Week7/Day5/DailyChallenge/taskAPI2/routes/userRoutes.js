const { Router } = require("express");
const router = Router();
const userController = require('../controllers/userController.js');
const { validateRegister, validateLogin } =require('../middleware/validateUser.js');

//GET All
router.get("/users", userController.getAllUsers);
//GET one user
router.get("/users/:id", userController.getUserById);

//POST reginser
router.post('/register', validateRegister,userController.register);

//POST login
router.post('/login',validateLogin, userController.login);

module.exports = router;
