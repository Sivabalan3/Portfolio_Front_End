const express =require('express')
const mongoose =require("mongoose")
const path=require('path')
const cors = require('cors');
const cookieParser=require('cookie-parser')
require('dotenv').config();


// files 
const form=require('./modals/Form.model')
const userRoutes =require('./routes/userRoutes')
const projectRoutes=require('./routes/projectRoutes')
const uploadRoutes=require('./routes/uploadRoutes')
const app=express();
const url=process.env.ATLAS_URL;

app.use(cors());

mongoose.connect(url)
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongoose db connected sucessfully");
})
// React to mongoDb send Data
app.post('/form',(req,res)=>{
    const {username,useremail,userphone,useraddres,userdate,usertime}=req.body;
    console.log(username,useremail,userphone,useraddres,userdate,usertime);
    const FormData=new form({username,useremail,userphone,useraddres,userdate,usertime})
    FormData.save();
})
// Get the Data from mongoDB
app.get('/form',(req,res)=>{
    form.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require('dotenv').config({ path: '.env' });

app.use("/api/users",userRoutes);
app.use("/api/projects",projectRoutes);
app.use("/api/upload",uploadRoutes );
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });
  
const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname + "/uploads")));

//Delete the Data
app.listen('8001',()=>{
    console.log("app running on the port 8001")
})