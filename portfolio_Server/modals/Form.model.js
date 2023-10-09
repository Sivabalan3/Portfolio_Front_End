const mongoose=require('mongoose')
const schema= mongoose.Schema;


const formSchema=new schema({
    username:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true,
        unique:true
    },
    userphone:{
        type:Number,
        required:true
    },
    useraddres:{
        type:String,
        required:true
    },
    userdate:{
        type:String,
        required:true
    },
    usertime:{
        type:String,
        required:true
    }
,
},{
    timestamps:true
}
)
const form=mongoose.model("FormData",formSchema);
module.exports=form;