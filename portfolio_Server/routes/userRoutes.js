const express=require('express');
const {createUser}=require('../controllers/userController');
const {authenticate,authorizeAdmin}=require('../middlewares/authMiddleware');
const router=express.Router();


router.route('/register').post(createUser).get(authenticate,authorizeAdmin)

module.exports=router;