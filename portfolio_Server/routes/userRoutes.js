const express=require('express');
const {createUser,loginUser,logoutCurrentUser,countTotalemails,getAllUsers}=require('../controllers/userController');
const {authenticate,authorizeAdmin}=require('../middlewares/authMiddleware');
const router=express.Router();


router.
    route('/')
    .post(createUser)
    .get(authenticate,authorizeAdmin,getAllUsers)
router.post("/auth",loginUser);
router.post("/logout",logoutCurrentUser)
router.route("/total-emails").get(countTotalemails);
module.exports=router;