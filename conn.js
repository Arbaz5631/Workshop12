const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Info:Info@cluster0.seli7.mongodb.net/JsonData?retryWrites=true&w=majority",{useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:false}).then(console.log("Connect Successfull")).catch((e)=>{
    console.log(e);
});

module.exports=mongoose;