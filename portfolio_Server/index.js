const express =require('express')
const mongoose =require("mongoose")
const cors = require('cors')
require('dotenv').config();

const form=require('./modals/Form.model')

const app=express();
const url=process.env.ATLAS_URL;
app.use(cors());
app.use(express.json())
mongoose.connect(url)
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongoose db connected sucessfully");
})
app.post('/form',(req,res)=>{
    const {username,useremail,userphone,useraddres,userdate,usertime}=req.body;
    console.log(username,useremail,userphone,useraddres,userdate,usertime);
    const FormData=new form({username,useremail,userphone,useraddres,userdate,usertime})
    FormData.save();
})
app.get('/form',(req,res)=>{
    form.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.listen('8001',()=>{
    console.log("app running on the port 8001")
})