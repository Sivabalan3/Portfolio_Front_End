const express=require('express');
const {createUser,loginUser,logoutCurrentUser,countTotalemails}=require('../controllers/userController');
const {authenticate,authorizeAdmin}=require('../middlewares/authMiddleware');
const router=express.Router();


router.route('/register').post(createUser).get(authenticate,authorizeAdmin)
router.post("/login",loginUser);
router.post("/logout",logoutCurrentUser)
router.route("/total-emails").get(countTotalemails);
module.exports=router;