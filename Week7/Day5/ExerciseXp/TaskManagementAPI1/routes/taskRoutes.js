const { Router } = require('express');
const router = Router();

//import controllers object
const taskController=require('../controllers/taskControllers.js');


router.delete('/:id',taskController.deleteTask);
router.put('/:id',taskController.updateTask);
router.post('/',taskController.createTask);
router.get('/:id',taskController.getOneTaskById);
router.get('/' ,taskController.getAllTasks);

module.exports = router;