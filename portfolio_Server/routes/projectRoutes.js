const express= require("express");
const formidable=require("express-formidable");
const router = express.Router();

const { addProject,addProjectReview,
    fetchAllProjects,
    fetchNewProjects,
    fetchProjectById,
    fetchProjects,
    fetchTopProjects,
    filterProjects,
    removeProject} =require("../controllers/projectController");
    const {authenticate,authorizeAdmin} =require('../middlewares/authMiddleware');
    const checkId=require("../middlewares/checkId");


    router.route("/").get(fetchProjects).post(formidable(),addProject);

    module.exports=router;