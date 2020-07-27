const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/customerController')
const requrelogin = require('../middleware/requirelogin')

router.get('/list',requrelogin,employeeController.list);
router.post('/create',requrelogin,employeeController.create);
router.get('/get/:id',requrelogin,employeeController.get);
router.put('/update/:id',requrelogin,employeeController.update);
router.delete('/delete/:id',employeeController.delete);
//router.post('/delete',requrelogin,employeeController.delete);

module.exports = router;