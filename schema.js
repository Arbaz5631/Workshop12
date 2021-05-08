const mongoose=require("mongoose");
const jsonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    }
   
})

const UserData=mongoose.model("UserData",jsonSchema);
module.exports=UserData;